type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, body, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display">{title}</h2>
      {body ? <p className="lead">{body}</p> : null}
    </div>
  );
}
