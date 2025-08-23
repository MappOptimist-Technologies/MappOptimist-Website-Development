import ButtonWithIcon from "../Buttons/ButtonWithIcon";

export default function QuoteComponent ({ title = "Let's Create Big Stories Together!", description = "Share your project details to build your path toward success.", btnText = "Get a quote", className = "" }) {
  return (
    <section className={ `quote-container ${className}` } data-aos="fade-up">
      <div
        style={ {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        } }
      ></div>
      <div className="quote-content">
        <h1 className="quote-title">{ title }</h1>
        <p className="quote-description" style={ { whiteSpace: 'pre-line' } }>{ description }</p>
        <ButtonWithIcon btnText={ btnText } />
      </div>
    </section>
  );
}