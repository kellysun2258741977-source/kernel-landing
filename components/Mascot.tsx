type Props = {
  size?: number;
  color?: string;
  face?: boolean;
  className?: string;
  animate?: boolean;
};

// 四角星 blob —— 对应 Moxt 的 momo 吉祥物
export default function Mascot({
  size = 200,
  color = "var(--color-grass-500)",
  face = true,
  className = "",
  animate = true,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M100 4 Q112 88 196 100 Q112 112 100 196 Q88 112 4 100 Q88 88 100 4 Z"
        fill={color}
        className={animate ? "animate-blob" : undefined}
        style={{ transformOrigin: "center" }}
      />
      {face && (
        <g fill="#1c1c1c" stroke="#1c1c1c">
          <ellipse cx="82" cy="92" rx="5.5" ry="8" stroke="none" />
          <ellipse cx="118" cy="92" rx="5.5" ry="8" stroke="none" />
          <path
            d="M78 110 Q100 134 122 110"
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
}
