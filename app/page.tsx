import InputBar from "./InputBar";

export default function Home() {
const dateArray = (getTheDay()+getTheMonth()+getTheYear()).split("");
console.log(dateArray);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex items-center py-10">
        <h1>Date Game</h1>
      </div>
      <div className="flex items-center py-10">
        <p>Todays date: {getTheDay()}/{getTheMonth()}/{getTheYear()}</p>
        <p>Number to use</p>
        {dateArray.map((number, index)=> (
          <p key={index}>{number}</p>
          ))}
      </div>
      <InputBar goalValue={1} />
    </main>
  );
}

function getTheYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year.toString();
}

function getTheMonth() {
  const date = new Date();
  const month = date.getMonth();
  return month.toString();
}

function getTheDay() {
  const date = new Date();
  const day = date.getDate();
  return day.toString();
}