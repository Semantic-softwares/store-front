// Shared by both theme headers' Share button. Prefers the native share sheet
// (mobile browsers); falls back to copying the link, same timed-checkmark
// pattern already used by WifiCardComponent's copy buttons.
export async function shareStorefrontLink(title: string): Promise<'shared' | 'copied' | 'failed'> {
  const url = window.location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return 'shared';
    } catch {
      // User cancelled the share sheet, or the browser rejected it — fall
      // through to clipboard rather than treating this as an error.
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    return 'copied';
  } catch {
    return 'failed';
  }
}
