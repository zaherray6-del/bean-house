export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Fresh Coffee Made Every Day</h1>
        <p>
          Enjoy the best coffee and delicious desserts in a cozy atmosphere.
        </p>

        <button onClick={() => alert("Welcome to Bean House")}>
          Order Now
        </button>
      </div>
    </section>
  );
}
