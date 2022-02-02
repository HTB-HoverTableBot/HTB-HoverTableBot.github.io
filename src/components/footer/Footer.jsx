import { Link, NavLink } from 'react-router-dom';
import { Section } from '../../layout/Section';

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="flex justify-center mb-6 pt-6">
      <a href="https://twitter.com/mlnievas" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          className="w-3 h-full mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </a>

      <a href="https://www.instagram.com/martin_nievas_/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="instagram"
          className="w-3 h-full mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/martin-nievas/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          className="w-3 h-full mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          ></path>
        </svg>
      </a>

      <a href="https://github.com/MartinNievas" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github"
          className="w-3 h-full mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
      </a>

      <a href="https://gitlab.com/MartinNievas" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
        <svg aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="gitlab"
          className="w-3 h-full mx-auto"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
          d="m456.51 308.36-18.049-55.587c.008.025.011.051.019.076-.009-.029-.014-.058-.022-.087l-.001-.005v-.002l-35.83-110.31c-1.96-5.811-7.353-9.711-13.536-9.663-6.201.032-11.446 3.857-13.364 9.748l-34.01 104.7h-107.31l-34.074-104.71c-1.916-5.886-7.162-9.71-13.362-9.742h-.075c-6.105 0-11.509 3.876-13.49 9.752l-35.732 110.21-.005.014v.003c-.009.028-.013.056-.022.084.008-.025.011-.051.019-.076l-18.115 55.591a20.258 20.258 0 0 0 7.36 22.697l156.42 113.65c.023.017.049.027.072.044.067.048.132.097.2.142-.064-.043-.124-.09-.187-.134l-.001-.001c.01.008.022.013.033.02l.027.016.004.003c.242.168.493.322.753.463.036.02.068.045.104.064l.002.001c.022.011.042.025.064.036.017.008.035.013.051.021.012.006.025.01.037.015.029.014.061.023.09.038.136.065.279.118.419.175.131.054.258.117.392.164l.017.007c.022.008.042.019.065.027.028.01.055.021.083.03l.033.008c.035.011.073.016.108.026l.042.01c.188.057.383.098.577.141.076.017.149.041.226.055l.033.008c.025.005.048.014.074.018.041.007.081.02.123.026.033.005.067.003.1.008l.017.001h.005c.369.053.743.09 1.124.09h.013c.382 0 .756-.037 1.126-.09h.004l.018-.001c.033-.005.068-.003.101-.008.042-.007.082-.019.124-.026.025-.004.048-.013.073-.018l.032-.008c.078-.015.153-.039.231-.056.191-.042.383-.083.57-.139l.039-.009c.037-.011.075-.016.112-.027.011-.004.023-.005.034-.008.029-.009.057-.021.085-.031.022-.008.042-.019.064-.027l.017-.007c.142-.05.276-.116.415-.173.129-.054.261-.102.387-.162.031-.015.064-.024.094-.039l.038-.016c.017-.008.035-.013.052-.022.023-.012.045-.026.067-.037l.001-.001c.037-.019.07-.046.107-.066.258-.14.508-.293.749-.46.019-.013.041-.023.061-.037l.016-.01c.023-.017.05-.028.073-.045l156.44-113.65a20.256 20.256 0 0 0 7.356-22.694zM280.42 440.71c.008.024.021.046.029.071-.008-.025-.021-.047-.029-.071zm2.625 3.782c-.031-.025-.061-.052-.091-.078l-.019-.017a6.468 6.468 0 0 1-.177-.153 6.895 6.895 0 0 1-.333-.306l.028.023.037.031c.229.219.47.425.722.615l.008.007c.012.009.022.02.034.03-.069-.05-.141-.098-.209-.152zm10.228-.248c-.06.052-.118.104-.179.154l-.021.019c-.031.025-.06.052-.09.077-.066.053-.138.101-.207.152.012-.009.022-.021.035-.029l.006-.006a7.78 7.78 0 0 0 .719-.613c.009-.009.02-.016.029-.024.012-.011.025-.02.036-.031a9.352 9.352 0 0 1-.328.301z"
          fill="currentColor"
          />
        </svg>
      </a>
    </div>

    <div className="text-center p-4">
      © 2021 Copyright:
      <a className="text-white" href="https://martinnievas.com/">Martin Nievas</a>
    </div>
  </footer>
);

export { Footer };