export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.parisperfect.com/blog/wp-content/uploads/2023/03/paris-one-bedroom-apartment-for-sale-eiffel-tower-view.jpg"
          alt="Paris"
        />
      </div>
      <div className="texts">
        <h2>MOVE-IN READY APARTMENT FOR SALE IN PARIS!</h2>
        <p className="info">
          <a className="author">Deen Gerald</a>
          <time>2023-05-04</time>
        </p>
        <p className="summary">
          Every once in a while a property so perfect comes along that we know
          we have to transform it into a dream apartment for sale in Paris. We
          gather our trusted team of builders and designers and create a stylish
          and beautifully finished Parisian home.
        </p>
      </div>
    </div>
  );
}
