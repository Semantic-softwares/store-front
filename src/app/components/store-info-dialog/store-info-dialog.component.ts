import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StorefrontStore } from '../../data-access/storefront.store';

// "View info" modal — store vitals + posted operational hours. Opened from
// both theme headers. Purely informational: the weekly hours list always
// renders (even for a store that hasn't opted into enforcing them), since a
// guest still benefits from knowing when the kitchen is actually staffed.
@Component({
  selector: 'app-storefront-store-info-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './store-info-dialog.component.html',
})
export class StoreInfoDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<StoreInfoDialogComponent>);
  protected readonly store = inject(StorefrontStore);

  close(): void {
    this.dialogRef.close();
  }
}
