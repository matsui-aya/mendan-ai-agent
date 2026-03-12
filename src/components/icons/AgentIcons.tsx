// KARTE-style Custom SVG Icons for AI Agents

export function DocumentAgentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft circle background */}
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
      {/* Document shape */}
      <rect x="24" y="18" width="26" height="34" rx="3" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M42 18V26H50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 18L50 26V49C50 50.6569 48.6569 52 47 52H27C25.3431 52 24 50.6569 24 49V21C24 19.3431 25.3431 18 27 18H42Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      {/* Document lines */}
      <path d="M30 32H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M30 38H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M30 44H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* AI Sparkle indicator */}
      <circle cx="54" cy="54" r="12" fill="currentColor"/>
      <path d="M54 48V60M48 54H60" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function CRMAgentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft circle background */}
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
      {/* Database shape */}
      <ellipse cx="37" cy="24" rx="16" ry="6" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21 24V36C21 39.3137 28.1634 42 37 42C45.8366 42 53 39.3137 53 36V24" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M21 36V48C21 51.3137 28.1634 54 37 54C45.8366 54 53 51.3137 53 48V36" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="37" cy="36" rx="16" ry="6" fill="white" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
      {/* Sync indicator */}
      <circle cx="56" cy="54" r="10" fill="currentColor"/>
      <path d="M52 54L54.5 51V53H59" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M60 54L57.5 57V55H53" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ProfileAgentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft circle background */}
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
      {/* Person profile */}
      <circle cx="36" cy="30" r="10" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 54C20 46.268 26.268 42 36 42C45.732 42 52 46.268 52 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Data layers floating */}
      <rect x="48" y="22" width="14" height="8" rx="2" fill="white" stroke="currentColor" strokeWidth="1"/>
      <path d="M51 26H59" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <rect x="52" y="34" width="14" height="8" rx="2" fill="white" stroke="currentColor" strokeWidth="1"/>
      <path d="M55 38H63" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Brain indicator */}
      <circle cx="56" cy="56" r="10" fill="currentColor"/>
      <circle cx="53" cy="54" r="2" stroke="white" strokeWidth="1.5"/>
      <circle cx="59" cy="54" r="2" stroke="white" strokeWidth="1.5"/>
      <path d="M53 58C53 58 55 60 56 60C57 60 59 58 59 58" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function MatchingAgentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft circle background */}
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
      {/* Person circle */}
      <circle cx="28" cy="32" r="12" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="28" cy="29" r="4" fill="currentColor" fillOpacity="0.3"/>
      <path d="M22 38C22 36 24.5 34 28 34C31.5 34 34 36 34 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Building/Job circle */}
      <circle cx="52" cy="42" r="12" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="47" y="37" width="10" height="10" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
      <rect x="49" y="39" width="2" height="2" fill="currentColor"/>
      <rect x="53" y="39" width="2" height="2" fill="currentColor"/>
      <rect x="49" y="43" width="2" height="4" fill="currentColor"/>
      {/* Connection */}
      <path d="M36 38L44 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
      {/* Match indicator */}
      <circle cx="40" cy="58" r="10" fill="currentColor"/>
      <path d="M36 58L39 61L45 55" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ProposalAgentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft circle background */}
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1"/>
      {/* Chat bubble */}
      <path d="M20 24C20 21.7909 21.7909 20 24 20H50C52.2091 20 54 21.7909 54 24V42C54 44.2091 52.2091 46 50 46H32L24 54V46H24C21.7909 46 20 44.2091 20 42V24Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      {/* Lightbulb inside */}
      <circle cx="37" cy="30" r="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M34 36V38H40V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M35 39H39" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Light rays */}
      <path d="M37 22V24" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M43 26L41.5 27.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M31 26L32.5 27.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Arrow indicator */}
      <circle cx="56" cy="54" r="10" fill="currentColor"/>
      <path d="M52 54H60M57 51L60 54L57 57" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Support section icons (KARTE style)
export function RoadmapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Document with roadmap */}
      <rect x="28" y="22" width="44" height="56" rx="4" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <text x="34" y="36" fill="currentColor" fontSize="8" fontWeight="500">ROADMAP</text>
      <path d="M34 44H66" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1"/>
      {/* Progress steps */}
      <circle cx="38" cy="52" r="3" fill="currentColor"/>
      <path d="M41 52H48" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="51" cy="52" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M54 52H61" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5"/>
      <circle cx="64" cy="52" r="3" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5"/>
      {/* Footer logo placeholder */}
      <path d="M34 68H44" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
    </svg>
  );
}

export function StarsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Star pattern */}
      <circle cx="35" cy="35" r="3" fill="currentColor"/>
      <circle cx="50" cy="30" r="2" fill="currentColor" fillOpacity="0.6"/>
      <circle cx="65" cy="35" r="3" fill="currentColor"/>
      <circle cx="30" cy="50" r="2" fill="currentColor" fillOpacity="0.6"/>
      <circle cx="50" cy="50" r="4" fill="currentColor"/>
      <circle cx="70" cy="50" r="2" fill="currentColor" fillOpacity="0.6"/>
      <circle cx="35" cy="65" r="3" fill="currentColor"/>
      <circle cx="50" cy="70" r="2" fill="currentColor" fillOpacity="0.6"/>
      <circle cx="65" cy="65" r="3" fill="currentColor"/>
      {/* Connection lines */}
      <path d="M38 37L47 47M53 47L62 37M38 63L47 53M53 53L62 63" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1"/>
    </svg>
  );
}

export function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Headphones */}
      <path d="M30 55V50C30 38.954 38.954 30 50 30C61.046 30 70 38.954 70 50V55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="26" y="52" width="10" height="16" rx="3" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="64" y="52" width="10" height="16" rx="3" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      {/* Sound waves */}
      <circle cx="50" cy="74" r="3" fill="currentColor"/>
      <path d="M44 74C44 74 46 72 50 72C54 72 56 74 56 74" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
