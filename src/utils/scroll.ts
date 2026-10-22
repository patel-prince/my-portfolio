/**
 * Smoothly scrolls to an in-page section by hash or element ID.
 * Works reliably even when the current window.location.hash already matches the target.
 */
export function scrollToSection(
  hashOrId: string,
  event?: React.MouseEvent
): void {
  if (event) {
    event.preventDefault();
  }

  if (typeof window === "undefined") return;

  const id = hashOrId.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });

    // Update URL hash cleanly without causing a jump or disabling repeated clicks
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
  }
}
