import Animation from "./animaion";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요👋
          <br className="hidden lg:inline-block" />
          두드림(DoDream)하는 배서연 입니다
        </h1>
        <p className="mb-8 leading-relaxed">
          Think Positively! 항상 긍정의 힘을 믿으며 앞으로 나아갑니다. 협업을
          위해 배려하며, 성장하기 위해 노력합니다. 프론트엔드 개발자를 희망하는
          마이스터고 학생입니다. 단순히 개발을 잘하는 프로그래머가 아닌 다양한
          것들에 관심을 갖고 융합시키는 Flexible한 사고를 하는 것을 비전으로
          두고 있습니다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
