import styles from './Quote.module.scss';

interface QuoteProps {
  cite?: string;
  autor?: string;
}

export const Quote: React.FC<QuoteProps> = ({ cite, autor }) => {
  return (
    <blockquote
      className={[
        styles.className,
        "blockquote mb-0 card-body text-center mt-3"
      ].join(' ')}
    >
      <p>
        {cite}
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          <cite title="Diane Von Furstenberg">
            {autor}
          </cite>
        </small>
      </footer>
    </blockquote>
  );
}

Quote.defaultProps = {
  cite: 'Jewelry is like the perfect spice - it always complements what’s already there.',
  autor: 'Diane Von Furstenberg'
}