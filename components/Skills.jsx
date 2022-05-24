import React from "react";

function Skills() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="mb-20">What I can Do </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[64px] h-[64px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[64px] h-[64px]"
                  src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[64px] h-[64px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[64px] h-[64px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[64px] h-[64px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1gnb2NpNCweJgWm5RK5k-YcxCkBreRm7n-3KYRMPQdhkbjfhze4smZVMGNWD519f5bk&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[64px] h-[64px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAe1BMVEX///8AAADIyMihoaF3d3f5+fk7OzsoKChJSUn8/PwiIiLt7e2Li4uOjo7W1tbw8PCUlJSEhITd3d3Pz8/o6OiqqqrBwcF/f39aWlphYWFBQUGxsbG5ubmGhoZubm4UFBScnJwLCwsvLy9QUFBMTEw1NTVgYGBycnISEhKTb2OjAAAEJElEQVR4nO3b6XbaMBAFYA3YbCasxgTCDk3y/k9YmbJZnrHJOajj+NzvR5uapXPDWJYUxxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANXe0CfIm1C/AljrQr8CRsaFfgS1O7AF+aQ+0KPGmstCvwJAq0K/DlVNdL2WaqXYEnH3PtCjyZbLUr8CSkiXYJnix32hV40m9pV+BJQjWdfET0oV2CJ7137Qo8WVCoXYIfTUq0S7gYUcFp0SBeZGbEfzQDshPhtvAyov85aNpk8lAmJzPvdGRe0N3v7Z9bMdnBX5CcNJl4yjfkb3JItMsfXdDAORKQ1sp6RPOl2I8FycyU8lOoGfXdQ6rJYrEfi5KZNfWcIxOm21STmZ3Uj4XJTIucZXOPmQjrJjNSPxYns591ZoQPaJd/kl6ytzRZJPRjcTLzkXnZijrMc5ST2VOfG8PLktmh8HT7OjpfDHK0k9nL04x5sCxZl2h0/brFd7R6siHbj2XJHob+vjAKaSYbn/9ePTTWTWky+/Lt5ZnCRFg/mT1n8v1Ynsw24cacP3JhIqyXrH9NFjIjwBPJ7MCxMuZIX8LjmsnWl68a+VH7iWTnoX9He2lHuArJbBFuPz6TzGyoRSTuCFcimV19OP0orGKct+gRvYnvX41kA7cfG/R96uS4w/sfKqheM1n/8R/ZMhq0LH+HgPaUW5Y9PKqVbJ1ZUh2y/fjMeZYQxRsS9/GrkmyS7ccnktkr2cx0t+erGkczWebsH2UKeSJZ5zyrGpyvapzKJLNLtYe7U8qTjS6zqhE/069SsvixH0uTDW5Xso7w1Ooks0u1eymlq5j97Sy151tudyclJot9byWP7yusi+O9H8uSfT5cFRJ+IsIls09MqEeLHxX6Y/lkw3u5JclmmZMrYBcybLKBSZcG0qDzIvlkdql2LeZnOzwHbvEpJeOW8K/FJLNLtUs/Fic7OEuXmJh6hWQropPne3zmTLLw2o+FyQJqO0dsd+ZuaBSS2WF17LkbuWQ2UfPyt5wsYXa/P/ObxG6yeJYmC9P/9IsdTF9mTjvm6Ne/b35Bsoib4Nt1uXuHSyZZTJMhNft2pOkdk5m8qHsJPll3f45UMNdfsntVUyLnbs1MsjAYmsHnwn7W3eZxI64PXoNPZktMD9uVZ5vxndxmVa43d3dPbw4ScOeZScfMWP7JYDIV9weWzse8od1rC35aNxT2Zg5pP4a89Lj0hs4jofT+eiLaaZfgS5K/ONXF2P2ZZn30+MGlBqLa3qZokm/tCrwJ5M3f365d236M6js+Juvy5/xSgecpuaK63mJqT7X6jo9JXX/FxZhm5RYiL1PX29SNiWt7vTaTmt6pbmr8K98AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/1V+uYyLfPDlVngAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className=""
                  src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  className="w-[100px] h-[64px]"
                  src="data:image/png;base64,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"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
