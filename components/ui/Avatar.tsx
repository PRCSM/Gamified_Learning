interface AvatarProps {
  src?: string | null;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-16 h-16 text-xl',
};

export default function Avatar({ src, name = '', size = 'md', className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`rounded-[7px] object-cover ${sizeMap[size]} ${className}`}
      />
    );
  }

  return (
    <div
      className={`
        rounded-[7px] flex items-center justify-center
        bg-bg-tertiary text-text-primary font-medium font-haffer
        ${sizeMap[size]} ${className}
      `}
    >
      {initials || '?'}
    </div>
  );
}
