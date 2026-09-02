export default function GlowEffectOnHover() {
  return (
    <div
      className="
        absolute
        inset-0
        rounded-4xl
        bg-gradient-to-br
        from-red-500/15
        via-transparent
        to-transparent
        opacity-65
        transition-opacity
        duration-1000
        group-hover:opacity-100
      "
    />
  );
}
