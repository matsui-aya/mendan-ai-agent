// KARTE-style Section Icons

// Problem/Challenge Icons for WithoutKarteSection
export function ClockProblemIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Clock */}
      <circle cx="50" cy="45" r="22" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M50 30V45L60 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Warning exclamation */}
      <circle cx="70" cy="70" r="14" fill="currentColor"/>
      <path d="M70 62V70M70 76V77" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function EyeHiddenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Eye shape */}
      <path d="M20 50C20 50 32 32 50 32C68 32 80 50 80 50C80 50 68 68 50 68C32 68 20 50 20 50Z" fill="white" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
      {/* Cross out line */}
      <path d="M25 75L75 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function PeopleScatterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Multiple scattered people icons */}
      <circle cx="30" cy="35" r="8" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 52C22 48 25 45 30 45C35 45 38 48 38 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

      <circle cx="70" cy="35" r="8" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M62 52C62 48 65 45 70 45C75 45 78 48 78 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

      <circle cx="50" cy="55" r="8" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M42 72C42 68 45 65 50 65C55 65 58 68 58 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Disconnection lines */}
      <path d="M38 40L45 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4"/>
      <path d="M62 40L55 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4"/>
    </svg>
  );
}

// Data type icons for NoCodeSection
export function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Target circles */}
      <circle cx="50" cy="50" r="28" fill="white" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="18" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="8" fill="currentColor"/>
      {/* Arrow */}
      <path d="M70 30L52 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M70 30L60 32L68 40L70 30Z" fill="currentColor"/>
    </svg>
  );
}

export function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Compass circle */}
      <circle cx="50" cy="50" r="28" fill="white" stroke="currentColor" strokeWidth="2"/>
      {/* Direction marks */}
      <path d="M50 24V30M50 70V76M24 50H30M70 50H76" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Compass needle */}
      <path d="M50 35L44 50L50 65L56 50L50 35Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50 35L56 50L50 50L50 35Z" fill="currentColor"/>
      <circle cx="50" cy="50" r="4" fill="white" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function ChartPersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Person silhouette */}
      <circle cx="40" cy="35" r="10" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M25 65C25 55 31 48 40 48C49 48 55 55 55 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Chart bars */}
      <rect x="58" y="55" width="8" height="20" rx="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
      <rect x="70" y="45" width="8" height="30" rx="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1"/>
      <rect x="64" y="35" width="8" height="40" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

// Role icons for RoleValueSection
export function CAPersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Person with headset */}
      <circle cx="50" cy="38" r="14" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M30 72C30 58 38 50 50 50C62 50 70 58 70 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Headset */}
      <path d="M32 40C32 30 40 22 50 22C60 22 68 30 68 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="28" y="36" width="8" height="12" rx="3" fill="currentColor"/>
      <rect x="64" y="36" width="8" height="12" rx="3" fill="currentColor"/>
      {/* Chat bubble */}
      <circle cx="72" cy="62" r="10" fill="currentColor"/>
      <path d="M68 62H76M72 58V66" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function ManagerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Central person */}
      <circle cx="50" cy="35" r="12" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M35 62C35 52 41 46 50 46C59 46 65 52 65 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Team members below */}
      <circle cx="28" cy="68" r="6" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="50" cy="72" r="6" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="72" cy="68" r="6" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      {/* Connection lines */}
      <path d="M42 55L32 64M58 55L68 64M50 58V66" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      {/* Chart indicator */}
      <circle cx="72" cy="28" r="10" fill="currentColor"/>
      <path d="M68 28H76M68 25L72 32L76 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ExecutiveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" fillOpacity="0.06"/>
      {/* Building */}
      <rect x="32" y="30" width="36" height="45" rx="3" fill="white" stroke="currentColor" strokeWidth="2"/>
      {/* Windows grid */}
      <rect x="38" y="36" width="8" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
      <rect x="54" y="36" width="8" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
      <rect x="38" y="48" width="8" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
      <rect x="54" y="48" width="8" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
      <rect x="38" y="60" width="8" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
      <rect x="54" y="60" width="8" height="6" rx="1" fill="currentColor" fillOpacity="0.3"/>
      {/* Growth indicator */}
      <circle cx="72" cy="28" r="12" fill="currentColor"/>
      <path d="M66 32L70 28L74 30L78 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M74 24H78V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Stats icons
export function SpeedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      {/* Speedometer */}
      <path d="M15 50C15 35 25 20 40 20C55 20 65 35 65 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      {/* Speed marks */}
      <path d="M22 45L26 47M40 22V28M58 45L54 47" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Needle */}
      <path d="M40 50L55 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="40" cy="50" r="5" fill="currentColor"/>
    </svg>
  );
}

export function TimeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      {/* Clock */}
      <circle cx="40" cy="40" r="24" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M40 24V40L52 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Hour marks */}
      <path d="M40 18V22M40 58V62M18 40H22M58 40H62" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08"/>
      {/* Calendar */}
      <rect x="18" y="22" width="44" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 34H62" stroke="currentColor" strokeWidth="2"/>
      {/* Calendar hooks */}
      <path d="M30 18V26M50 18V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Days */}
      <circle cx="30" cy="44" r="3" fill="currentColor" fillOpacity="0.3"/>
      <circle cx="40" cy="44" r="3" fill="currentColor" fillOpacity="0.3"/>
      <circle cx="50" cy="44" r="3" fill="currentColor"/>
      <circle cx="30" cy="54" r="3" fill="currentColor" fillOpacity="0.3"/>
      <circle cx="40" cy="54" r="3" fill="currentColor" fillOpacity="0.3"/>
    </svg>
  );
}

// Flow step icons
export function HearingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="currentColor" fillOpacity="0.08"/>
      {/* Two people talking */}
      <circle cx="22" cy="22" r="7" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="38" cy="28" r="7" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      {/* Speech bubbles */}
      <path d="M32 18C32 15 35 14 37 14C39 14 42 15 42 18C42 20 40 21 38 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 28C18 31 15 32 13 32C11 32 8 31 8 28C8 26 10 25 12 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 42C16 38 18 35 22 35C26 35 28 38 28 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 48C32 44 34 41 38 41C42 41 44 44 44 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function DocumentCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="currentColor" fillOpacity="0.08"/>
      {/* Document */}
      <rect x="16" y="12" width="22" height="30" rx="2" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M32 12V18H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22H32M20 28H28M20 34H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Checkmark circle */}
      <circle cx="40" cy="40" r="12" fill="currentColor"/>
      <path d="M35 40L38 43L45 36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ConnectIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="currentColor" fillOpacity="0.08"/>
      {/* Connection nodes */}
      <circle cx="20" cy="20" r="8" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="40" cy="20" r="8" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="30" cy="42" r="8" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      {/* Connection lines */}
      <path d="M26 24L34 24M24 26L27 38M36 26L33 38" stroke="currentColor" strokeWidth="1.5"/>
      {/* Lightning bolt for sync */}
      <path d="M28 40L32 38L30 42L34 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PilotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="currentColor" fillOpacity="0.08"/>
      {/* Rocket/pilot */}
      <path d="M30 14C30 14 40 20 40 32C40 44 30 50 30 50C30 50 20 44 20 32C20 20 30 14 30 14Z" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="30" cy="28" r="5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
      {/* Fins */}
      <path d="M20 36L14 42L20 40" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
      <path d="M40 36L46 42L40 40" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
      {/* Flame */}
      <path d="M26 50C26 50 28 54 30 54C32 54 34 50 34 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function LaunchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="currentColor" fillOpacity="0.08"/>
      {/* Rocket launching */}
      <path d="M30 10L38 26H22L30 10Z" fill="currentColor"/>
      <rect x="24" y="26" width="12" height="16" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="30" cy="32" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1"/>
      {/* Flames */}
      <path d="M26 42C26 42 28 50 30 50C32 50 34 42 34 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 42C28 42 29 46 30 46C31 46 32 42 32 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Speed lines */}
      <path d="M18 20L14 18M42 20L46 18M16 28H12M44 28H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  );
}
