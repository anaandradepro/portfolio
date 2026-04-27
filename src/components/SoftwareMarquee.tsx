import * as React from "react";

// Inline simple SVGs for tool icons (Framer, Figma, Notion, ChatGPT) as placeholders
const softwares = [
  { name: "Figma", icon: () => <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M19 28.5A9.5 9.5 0 1119 9.5a9.5 9.5 0 010 19z" fill="#0acf83"/><path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5A9.5 9.5 0 110 47.5z" fill="#0acf83"/><path d="M19 0H9.5A9.5 9.5 0 109.5 19H19V0z" fill="#f24e1e"/><path d="M0 28.5A9.5 9.5 0 109.5 38h9.5V19H9.5A9.5 9.5 0 000 28.5z" fill="#a259ff"/><path d="M19 0h9.5a9.5 9.5 0 110 19H19V0z" fill="#ff7262"/></svg> },
  { name: "Framer", icon: () => <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 dark:fill-white fill-black"><path d="M11.25 11.25h31.5v15.75H27v15.75L11.25 27V11.25z"/></svg> },
  { name: "Notion", icon: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path fillRule="evenodd" clipRule="evenodd" d="M4.613 20.354C4.664 20.89 5.097 21 6.002 21H18.06c.928 0 1.253-.16 1.341-.818l.896-7.39h-1.396l-.887 5.679h-8.082l2.302-12.721h5.81l-1.077 7.042h1.378l1.32-8.583c.09-.594-.25-1.01-1.01-1.01H6.182c-.815 0-1.127.352-1.229.988l-1.637 12.015H4.7c.607.039.81-.115.939-.817.026-.06.052-.143.081-.248.163-.586.38-1.517.65-2.613H15.03l-3.329-8.497-2.399 12.91a403.4 403.4 0 0 1-5.064-13.68H2.885l1.728 16.038zM15.534 16.126h-8.31l1.503-6.28 6.807 6.28z" fill="currentColor"/></svg> },
  { name: "ChatGPT", icon: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0010.457 0a5.982 5.982 0 00-5.303 3.097 6.046 6.046 0 00-2.483 6.72 6.065 6.065 0 00-.41 5.2 5.982 5.982 0 005.158 4.908 6.046 6.046 0 006.51 2.9 6.065 6.065 0 004.8-2.01 5.982 5.982 0 005.303-3.097 6.046 6.046 0 002.483-6.72A6.065 6.065 0 0022.282 9.82zm-4.322 9.444c-.792.83-2.025 1.157-3.155.836A4.526 4.526 0 0110.22 17.6c-.035-.018-.088-.046-.14-.078L6.47 15.44A2.32 2.32 0 015.352 13.5l1.096-1.502a3.834 3.834 0 004.8 1.48L15 11.29l1.45 2.5a2.536 2.536 0 01-1.34 3.4L11.51 19.3l.94 1.544c.958.077 1.94-.176 2.668-.7v-2.028a2.6 2.6 0 011.666-2.45h2.15v2.24A4.593 4.593 0 0117.96 19.266z" fill="currentColor"/></svg> },
  { name: "UX Design", icon: () => <div className="text-xl font-extrabold tracking-tighter w-8 h-8 flex items-center justify-center">UX</div> },
  { name: "Webflow", icon: () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M16 1.5h8L16 14.28 11.23 2.15 16 1.5zm-5 4.3l3.6 8.5H11L8.5 7.6 11 5.8zM0 1.5h6l3.5 12.5H4L1 4.5H0V1.5z" fill="currentColor"/></svg> },
];

export default function SoftwareMarquee() {
  return (
    <section className="py-12 border-y border-border bg-card/30 backdrop-blur-sm overflow-hidden flex flex-col items-center">
      <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-6">Ferramentas que domino</p>
      <div className="relative flex overflow-x-hidden group w-full max-w-7xl">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {softwares.concat(softwares).map((software, idx) => (
            <div key={idx} className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors grayscale group-hover:grayscale-0">
              <span className="opacity-80">{software.icon()}</span>
              <span className="text-xl font-medium tracking-tight bg-clip-text">{software.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 px-6">
          {softwares.concat(softwares).map((software, idx) => (
            <div key={idx} className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors grayscale group-hover:grayscale-0">
              <span className="opacity-80">{software.icon()}</span>
              <span className="text-xl font-medium tracking-tight bg-clip-text">{software.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
