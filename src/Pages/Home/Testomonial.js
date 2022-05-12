import React from 'react';

const Testomonial = ({peopleImg, name, state}) => {
    return (
        <div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal rounded-md">
                <div className="mb-5">
                    <p className="text-gray-700 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src={peopleImg} alt="Avatar of Jonathan Reinink"/>
                    <div className="text-sm">
                        <h2 className="text-gray-900 leading-none">{name}</h2>
                        <p className="text-gray-600">{state}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testomonial;