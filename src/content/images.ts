/**
 * PLACEHOLDER PHOTOGRAPHY
 * These are temporary editorial photos used so the layouts can be reviewed with
 * real imagery. Replace with licensed Anchor Financials photography (ideally
 * featuring local financial-institution staff and environments) before launch.
 */
function unsplash(id: string, width = 1400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const images = {
  teamMeeting: unsplash("photo-1521737604893-d14cc237f11d"),
  officeTeam: unsplash("photo-1556761175-b413da4baf72"),
  boardroom: unsplash("photo-1552664730-d307ca884978"),
  handshake: unsplash("photo-1600880292203-757bb62b4baf"),
  professional: unsplash("photo-1573497019940-1c28c88b4f3e"),
  collaboration: unsplash("photo-1522071820081-009f0129c71c"),
  financeDesk: unsplash("photo-1554224155-6726b3ff858f"),
  mobileUse: unsplash("photo-1512941937669-90a1b58e7e9c"),
  community: unsplash("photo-1531482615713-2afd69097998"),
  training: unsplash("photo-1542744173-8e7e53415bb0"),
} as const;

export type ImageKey = keyof typeof images;
