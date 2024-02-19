function Articles() {
  return (
    <div className="pt-20 bg-neutral-vary-light-gray pb-12">
      <h3 className="px-4 md:px-28 mb-10" style={{ fontSize: "36px" }}>
        Latest Articles
      </h3>
      <div className=" px-4 md:px-28 flex flex-col md:flex-row justify-between gap-8">
        <div className="bg-neutral-white rounded-b-lg">
          <img
            src="./image-currency.jpg"
            alt=""
            className="rounded-t-lg md:h-48"
          />
          <div className="p-5">
            <p className="article-author">By Claire Robinson</p>
            <h6 className="article-name">
              Receive money in any Curreny with no fees
            </h6>
            <p className="article-excerpt">
              The world is getting smaller and we're becoming more mobile. So
              why should you be force to only receive money in a single
            </p>
          </div>
        </div>
        <div className="bg-neutral-white rounded-b-lg">
          <img
            src="./image-restaurant.jpg"
            alt=""
            className="rounded-t-lg md:h-48"
          />
          <div className="p-5">
            <p className="article-author">By Wilson Hutton</p>
            <h6 className="article-name">
              Treat yourself without worry about money
            </h6>
            <p className="article-excerpt">
              Our Simple budegting feature allows you to seperate out your
              spending and set realist limits each month. That means you
            </p>
          </div>
        </div>
        <div className="bg-neutral-white rounded-b-lg">
          <img
            src="./image-plane.jpg"
            alt=""
            className="rounded-t-lg md:h-48"
          />
          <div className="p-5">
            <p className="article-author">By Wilson Hutton</p>
            <h6 className="article-name">
              Take your Easybank card wherever you go
            </h6>
            <p className="article-excerpt">
              We want you to go enjoy your travels. This is why we dont charge
              any fees on purchases while you're abroad. We'll even show you
            </p>
          </div>
        </div>
        <div className="bg-neutral-white rounded-b-lg">
          <img
            src="./image-confetti.jpg"
            alt=""
            className="rounded-t-lg md:h-48"
          />
          <div className="p-5">
            <p className="article-author">By Claire Robinson</p>
            <h6 className="article-name">
              Our invite-only Beta accounts are now live!
            </h6>
            <p className="article-excerpt">
              The world is getting smaller and we're becoming more mobile. So
              why should you be force to only receive money in a single
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
