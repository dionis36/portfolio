/**
 * Content Length & Typographic Guidelines
 *
 * NOTE: These are suggested guidelines to achieve optimal visual harmony,
 * equal card heights, and prevent orphaned words in the UI layout.
 * They are recommendations for content authors, not strict technical constraints.
 */

export interface ContentLengthGuideline {
  field: string;
  suggestedWords: string;
  suggestedChars: string;
  targetLines: string;
  purpose: string;
}

export const contentGuidelines: Record<string, ContentLengthGuideline[]> = {
  profile: [
    {
      field: "headline (Home Hero)",
      suggestedWords: "6 - 10 words",
      suggestedChars: "~35 - 65 chars",
      targetLines: "2 lines",
      purpose: "Balances naturally alongside the hero avatar without awkward wrapping.",
    },
    {
      field: "heroBio (Hero Subtitle)",
      suggestedWords: "12 - 18 words",
      suggestedChars: "~80 - 120 chars",
      targetLines: "2 lines",
      purpose: "Fills the max-w-[420px] hero container cleanly above the CTA button.",
    },
    {
      field: "aboutBioShort (Home Snippet Paragraphs)",
      suggestedWords: "30 - 45 words / para",
      suggestedChars: "~180 - 280 chars",
      targetLines: "3 - 4 lines",
      purpose: "Maintains height parity with the 2-item Experience column on the right.",
    },
    {
      field: "story (About Page Paragraphs)",
      suggestedWords: "45 - 65 words / para",
      suggestedChars: "~260 - 400 chars",
      targetLines: "4 - 5 lines",
      purpose: "Balances smoothly against the 3-item Education column on the right.",
    },
  ],
  experienceAndEducation: [
    {
      field: "role / degree",
      suggestedWords: "2 - 4 words",
      suggestedChars: "~15 - 30 chars",
      targetLines: "1 line",
      purpose: "Keeps milestone titles on a single clean line in ~300px sidebar columns.",
    },
    {
      field: "company / school",
      suggestedWords: "1 - 3 words",
      suggestedChars: "~10 - 25 chars",
      targetLines: "1 line",
      purpose: "Crisp secondary attribution below the title.",
    },
    {
      field: "period",
      suggestedWords: "2 - 4 words",
      suggestedChars: "~10 - 20 chars",
      targetLines: "1 line",
      purpose: "Standardized date formats (e.g., 'Jan 2022 - Present' or '2018 - 2022').",
    },
    {
      field: "experience description",
      suggestedWords: "15 - 24 words",
      suggestedChars: "~90 - 150 chars",
      targetLines: "2 - 3 lines",
      purpose: "Compact, punchy summary of career impact.",
    },
  ],
  portfolio: [
    {
      field: "project title",
      suggestedWords: "2 - 5 words",
      suggestedChars: "~15 - 35 chars",
      targetLines: "1 line",
      purpose: "Bold, scannable anchor for each case study card.",
    },
    {
      field: "featured card description",
      suggestedWords: "18 - 26 words",
      suggestedChars: "~110 - 170 chars",
      targetLines: "2 - 3 lines",
      purpose: "Fills the wide horizontal card layout with balanced visual weight.",
    },
    {
      field: "grid card description (2-Column)",
      suggestedWords: "12 - 18 words",
      suggestedChars: "~75 - 120 chars",
      targetLines: "2 lines",
      purpose: "Ensures side-by-side cards stay identical in height across rows.",
    },
    {
      field: "tags / services",
      suggestedWords: "1 - 2 words / tag",
      suggestedChars: "~8 - 16 chars",
      targetLines: "2 - 3 tags max",
      purpose: "Prevents wrapping to a second line on mobile viewports.",
    },
  ],
  blog: [
    {
      field: "article title",
      suggestedWords: "6 - 11 words",
      suggestedChars: "~40 - 75 chars",
      targetLines: "2 lines",
      purpose: "Engaging editorial headline that wraps evenly on desktop and mobile.",
    },
    {
      field: "article excerpt",
      suggestedWords: "14 - 20 words",
      suggestedChars: "~90 - 135 chars",
      targetLines: "2 lines",
      purpose: "Maintains symmetrical card heights across the 2-column feed.",
    },
  ],
  faqsAndSocials: [
    {
      field: "FAQ question",
      suggestedWords: "6 - 12 words",
      suggestedChars: "~35 - 75 chars",
      targetLines: "1 line",
      purpose: "Compact, easily scannable accordion trigger.",
    },
    {
      field: "FAQ answer",
      suggestedWords: "25 - 45 words",
      suggestedChars: "~160 - 290 chars",
      targetLines: "2 - 4 lines",
      purpose: "Informative explanation without creating excessive page scroll.",
    },
    {
      field: "social media name",
      suggestedWords: "1 word",
      suggestedChars: "~6 - 12 chars",
      targetLines: "1 line",
      purpose: "Centers cleanly alongside brand vector icon inside the card.",
    },
  ],
};
