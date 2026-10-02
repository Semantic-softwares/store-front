import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { PublicOrderStatus } from './storefront.models';

// Connects to the backend's dedicated public /self-order namespace (see
// SelfOrderStatusGateway) — deliberately NOT the staff SocketService's
// default-namespace connection, which requires a JWT and would disconnect an
// anonymous customer outright. No auth token here; authorization happens
// per-room-join, keyed by the qrToken (the physical QR code is the
// credential), same trust model as the rest of self-order.
@Injectable({ providedIn: 'root' })
export class StorefrontSocketService {
  private socket: Socket | null = null;
  private readonly orderStatusSubject = new Subject<PublicOrderStatus>();
  readonly orderStatus$: Observable<PublicOrderStatus> = this.orderStatusSubject.asObservable();

  connectAndJoin(qrToken: string): void {
    this.connect();
    this.joinWhenConnected(() => this.socket?.emit('joinTableStatus', { qrToken }));
  }

  // No-table counterpart to connectAndJoin, for a pickup/delivery order —
  // joins by the order id returned when the order was placed, since there's
  // no table/qrToken to resolve a room from.
  connectAndJoinOrder(orderId: string): void {
    this.connect();
    this.joinWhenConnected(() => this.socket?.emit('joinOrderStatus', { orderId }));
  }

  private connect(): void {
    if (this.socket) return;
    this.socket = io(`${environment.apiUrl}/self-order`, {
      transports: ['websocket', 'polling'],
    });
    this.socket.on('orderStatus', (payload: PublicOrderStatus) => {
      this.orderStatusSubject.next(payload);
    });
  }

  private joinWhenConnected(join: () => void): void {
    if (this.socket?.connected) {
      join();
    } else {
      this.socket?.once('connect', join);
    }
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket = null;
  }
}
