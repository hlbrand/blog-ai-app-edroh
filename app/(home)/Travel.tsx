import React from 'react';
import Card from '../(shared)/Card';

const Travel = () => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h4>
        <p className="font-bold text-2xl">New Travel Experiences</p>
      </div>

      {/* CARDS ROW */}
      <div className="sm:flex justify-between gap-8">
        {/* LARGE CARD */}
        <Card className="basis-1/3 bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="basis-1/3 bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="basis-1/3 bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
      </div>
      <Card
        className="bg-wh-500 sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
      />
    </section>
  );
};

export default Travel;