

function Section_text({ colors, texts, selectedColor }) {
  return (
    <>
      <div className="flex flex-col justify-between relative px-4 h-fit pt-8 md:px-20 bg-white ">
        <div className="flex flex-col md:flex-row">
          {/* left box */}
          <div className="flex flex-col w-fit h-auto md:w-1/2">
            <h2 className={`text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 ${colors[selectedColor]}`}>
              {texts.heading}
            </h2>
            <br />
            <div>
              <p>{texts.description}</p>
              <br />
            </div>
          </div>
          {/* right box */}
        </div>
      </div>
    </>
  );
}

export default Section_text;