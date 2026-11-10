import React from "react";

declare module "lucide-react" {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Activity: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Calendar: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Compass: LucideIcon;
  export const Copy: LucideIcon;
  export const Droplet: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Feather: LucideIcon;
  export const FileText: LucideIcon;
  export const Filter: LucideIcon;
  export const Globe: LucideIcon;
  export const Heart: LucideIcon;
  export const HeartHandshake: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Instagram: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Share2: LucideIcon;
  export const Shield: LucideIcon;
  export const ShieldAlert: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const UserCheck: LucideIcon;
  export const X: LucideIcon;
}
