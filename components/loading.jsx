import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { svgAnimation } from '@/data/animations';

const LoadingPage = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => setShow(false), 1100);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* if you want to create svg https://danmarshall.github.io/google-font-to-svg-path/ */}
      <svg
        width="255"
        height="77"
        viewBox="0 0 255 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <AnimatePresence>
          {show && (
            <motion.path
              {...svgAnimation}
              d="M 163.3 8 L 163.3 20.7 L 163.5 44.4 Q 163.5 52.2 161.4 58.25 A 38.99 38.99 0 0 1 159.775 62.25 Q 158.222 65.504 156.3 67.65 Q 153.3 71 149.4 73.1 A 28.532 28.532 0 0 1 142.678 75.831 A 23.821 23.821 0 0 1 136.7 76.6 A 0.277 0.277 0 0 1 136.547 76.533 Q 136.211 76.284 135.5 75.1 A 12.133 12.133 0 0 1 134.893 73.939 Q 134.325 72.706 133.8 71 A 19.521 19.521 0 0 1 133.226 68.65 Q 133.004 67.389 133 66.237 A 12.11 12.11 0 0 1 133 66.2 L 134.9 66.2 A 20.817 20.817 0 0 0 138.46 65.903 A 19.173 19.173 0 0 0 138.75 65.85 A 8.798 8.798 0 0 0 140.089 65.474 Q 141.507 64.963 143.3 63.9 Q 146 62.3 147.9 59.7 A 14.551 14.551 0 0 0 149.148 57.617 Q 150.282 55.347 151.2 52 A 36.948 36.948 0 0 0 152.205 46.845 Q 152.526 44.3 152.586 41.438 A 63.63 63.63 0 0 0 152.6 40.1 Q 152.6 39.733 152.516 39.703 A 0.046 0.046 0 0 0 152.5 39.7 L 152.2 40 A 13.727 13.727 0 0 1 142.147 46.29 A 21.232 21.232 0 0 1 139.1 46.5 A 13.613 13.613 0 0 1 133.626 45.43 Q 130.603 44.119 128.4 41.2 Q 124.4 35.9 124.4 29.3 A 30.651 30.651 0 0 1 125.874 19.604 A 25.758 25.758 0 0 1 132.1 9.5 Q 139.8 1.7 154.2 1.7 Q 157.07 1.7 157.587 2.036 A 0.204 0.204 0 0 1 157.7 2.2 A 19.56 19.56 0 0 1 157.955 4.383 A 24.425 24.425 0 0 1 158 5.9 L 157.9 7.4 L 159 7.4 Q 162.112 7.4 163.238 7.967 A 2.157 2.157 0 0 1 163.3 8 Z M 105.6 41.7 L 105.5 39.6 L 105.4 39.4 Q 103 43.1 99.35 45.3 Q 95.7 47.5 92.2 47.5 Q 83.785 47.5 81.151 37.031 A 38.43 38.43 0 0 1 80.2 31.2 A 35.096 35.096 0 0 1 80.132 29.937 Q 80 26.575 80 17.8 A 203.901 203.901 0 0 1 80.032 14.059 Q 80.169 6.625 80.9 5 Q 83.334 3.034 88.573 2.909 A 30.38 30.38 0 0 1 89.3 2.9 A 16.491 16.491 0 0 1 90.16 2.921 Q 91.37 2.984 91.876 3.243 A 0.886 0.886 0 0 1 92.1 3.4 A 3.055 3.055 0 0 1 92.099 3.464 Q 92.089 3.772 92.024 5.477 A 2905.373 2905.373 0 0 1 92 6.1 A 360.156 360.156 0 0 0 91.782 9.681 Q 91.566 13.543 91.516 16.25 A 83.451 83.451 0 0 0 91.5 17.8 A 274.003 274.003 0 0 0 91.507 19.716 Q 91.525 22.388 91.6 23.85 Q 91.697 25.741 91.747 26.315 A 8.866 8.866 0 0 0 91.75 26.35 Q 91.792 26.803 91.968 27.832 A 72.051 72.051 0 0 0 92.05 28.3 A 10.872 10.872 0 0 0 92.317 29.448 Q 92.491 30.041 92.723 30.539 A 6.377 6.377 0 0 0 92.8 30.7 A 5.927 5.927 0 0 0 93.994 32.321 Q 95.359 33.6 97.45 33.6 A 6.162 6.162 0 0 0 101.283 32.243 Q 102.143 31.583 102.932 30.6 A 12.575 12.575 0 0 0 103.05 30.45 A 28.353 28.353 0 0 0 103.96 29.218 Q 105.404 27.138 105.404 26.105 A 1.367 1.367 0 0 0 105.4 26 L 105.4 22.6 Q 105.4 4.635 105.979 2.957 A 0.839 0.839 0 0 1 106 2.9 Q 106.464 2.065 108.781 1.143 A 22.281 22.281 0 0 1 109.15 1 A 15.382 15.382 0 0 1 112.852 0.088 A 13.713 13.713 0 0 1 114.4 0 A 26.341 26.341 0 0 1 115.298 0.014 Q 117.075 0.075 117.4 0.4 L 117.2 5.1 Q 116.6 19.4 116.6 27.2 A 245.545 245.545 0 0 0 116.614 29.925 Q 116.66 34.048 116.856 36.032 A 12.405 12.405 0 0 0 117 37.1 A 26.851 26.851 0 0 0 117.671 40.435 Q 118.136 42.139 118.806 43.526 A 13.144 13.144 0 0 0 119.7 45.1 A 0.91 0.91 0 0 1 119.49 45.615 Q 118.824 46.527 116.047 48.057 A 45.516 45.516 0 0 1 115.6 48.3 A 25.451 25.451 0 0 1 113.159 49.459 Q 111.957 49.947 110.881 50.206 A 9.769 9.769 0 0 1 108.6 50.5 Q 107.8 50.5 106.8 47.5 Q 105.8 44.5 105.6 41.7 Z M 219.4 47.1 L 216.6 47.5 A 0.694 0.694 0 0 1 216.168 47.314 Q 215.517 46.778 214.7 44.7 A 19.458 19.458 0 0 1 214.052 42.778 Q 213.6 41.145 213.6 39.8 Q 214.6 36.2 222.4 26 Q 230.071 15.97 233.873 12.321 A 27.818 27.818 0 0 1 234 12.2 Q 234.9 11.3 229.7 10.7 Q 224.5 10.1 220.65 10.1 A 236.692 236.692 0 0 0 219.31 10.104 Q 216.844 10.118 216.028 10.188 A 5.175 5.175 0 0 0 215.9 10.2 Q 215.9 5.5 216.85 3.5 A 54.135 54.135 0 0 1 217.184 2.81 Q 217.857 1.444 218.1 1.2 A 1.611 1.611 0 0 1 218.748 0.874 Q 220.6 0.3 226.95 0.3 A 157.772 157.772 0 0 1 235.499 0.522 A 122.975 122.975 0 0 1 241.6 1 A 142.573 142.573 0 0 1 243.18 1.173 Q 248.375 1.775 248.9 2.3 A 9.51 9.51 0 0 1 250.095 4.869 Q 250.47 6.092 250.645 7.576 A 24.087 24.087 0 0 1 250.8 10.4 Q 245.6 14.3 238.8 23.4 A 167.302 167.302 0 0 0 236.489 26.563 Q 232 32.875 232 34.5 Q 234.986 34.5 240.053 34.91 A 257.692 257.692 0 0 1 243.35 35.2 Q 249.424 35.771 250.945 36.341 A 1.159 1.159 0 0 1 251.4 36.6 L 251.4 37.7 Q 251.4 43.575 250.17 45.529 A 2.69 2.69 0 0 1 249.8 46 A 77.769 77.769 0 0 0 247.171 45.842 Q 244.211 45.709 240.179 45.701 A 265.574 265.574 0 0 0 239.6 45.7 Q 230.566 45.7 223.525 46.521 A 84.887 84.887 0 0 0 219.4 47.1 Z M 38.2 18.1 L 38.2 23.2 A 814.988 814.988 0 0 0 38.211 27.522 Q 38.25 34.94 38.438 37.216 A 10.196 10.196 0 0 0 38.5 37.8 A 22.35 22.35 0 0 0 39.093 40.649 Q 39.503 42.104 40.092 43.253 A 8.664 8.664 0 0 0 41.9 45.7 A 1.065 1.065 0 0 1 41.676 46.287 Q 41.132 47.074 39.27 48.228 A 32.97 32.97 0 0 1 37.95 49 A 21.552 21.552 0 0 1 35.323 50.253 Q 32.9 51.2 30.8 51.2 A 0.831 0.831 0 0 1 30.279 50.985 Q 29.729 50.537 29.145 49.162 A 16.098 16.098 0 0 1 28.9 48.55 Q 27.9 45.9 27.75 44.6 A 28.428 28.428 0 0 0 27.714 44.295 Q 27.588 43.3 27.5 43.3 L 27.2 43.5 Q 21.9 47.7 14.8 47.7 A 23.459 23.459 0 0 1 10.538 47.337 Q 8.144 46.894 6.259 45.911 A 11.714 11.714 0 0 1 3.85 44.25 A 11.39 11.39 0 0 1 0.024 36.073 A 15.58 15.58 0 0 1 0 35.2 A 21.348 21.348 0 0 1 0.405 30.939 A 15.225 15.225 0 0 1 2.45 25.75 A 20.639 20.639 0 0 1 5.023 22.454 A 15.891 15.891 0 0 1 8.2 19.9 Q 11.5 17.9 15.5 16.7 A 61.228 61.228 0 0 1 18.726 15.733 Q 21.869 14.892 24.121 14.736 A 14.186 14.186 0 0 1 25.1 14.7 L 25.3 14.6 A 3.532 3.532 0 0 0 23.337 11.476 Q 20.646 9.868 14.271 9.716 A 57.557 57.557 0 0 0 12.9 9.7 Q 8.936 9.7 6.609 9.962 A 19.248 19.248 0 0 0 5.6 10.1 L 5.5 10.1 A 8.317 8.317 0 0 1 5.648 8.607 Q 5.921 7.117 6.7 5.223 A 27.072 27.072 0 0 1 6.75 5.1 A 38.034 38.034 0 0 1 7.314 3.809 Q 8.135 2.028 8.755 1.306 A 3.001 3.001 0 0 1 8.85 1.2 A 1.536 1.536 0 0 1 9.451 0.86 Q 11.029 0.3 16 0.3 Q 26.808 0.3 32.223 4.21 A 13.759 13.759 0 0 1 32.8 4.65 A 13.734 13.734 0 0 1 37.376 11.715 Q 38.046 14.015 38.171 16.792 A 28.968 28.968 0 0 1 38.2 18.1 Z M 207.2 18.1 L 207.2 23.2 A 814.988 814.988 0 0 0 207.211 27.522 Q 207.25 34.94 207.438 37.216 A 10.196 10.196 0 0 0 207.5 37.8 A 22.35 22.35 0 0 0 208.093 40.649 Q 208.503 42.104 209.092 43.253 A 8.664 8.664 0 0 0 210.9 45.7 A 1.065 1.065 0 0 1 210.676 46.287 Q 210.132 47.074 208.27 48.228 A 32.97 32.97 0 0 1 206.95 49 A 21.552 21.552 0 0 1 204.323 50.253 Q 201.9 51.2 199.8 51.2 A 0.831 0.831 0 0 1 199.279 50.985 Q 198.729 50.537 198.145 49.162 A 16.098 16.098 0 0 1 197.9 48.55 Q 196.9 45.9 196.75 44.6 A 28.428 28.428 0 0 0 196.714 44.295 Q 196.588 43.3 196.5 43.3 L 196.2 43.5 Q 190.9 47.7 183.8 47.7 A 23.459 23.459 0 0 1 179.538 47.337 Q 177.144 46.894 175.259 45.911 A 11.714 11.714 0 0 1 172.85 44.25 A 11.39 11.39 0 0 1 169.024 36.073 A 15.58 15.58 0 0 1 169 35.2 A 21.348 21.348 0 0 1 169.405 30.939 A 15.225 15.225 0 0 1 171.45 25.75 A 20.639 20.639 0 0 1 174.023 22.454 A 15.891 15.891 0 0 1 177.2 19.9 Q 180.5 17.9 184.5 16.7 A 61.228 61.228 0 0 1 187.726 15.733 Q 190.869 14.892 193.121 14.736 A 14.186 14.186 0 0 1 194.1 14.7 L 194.3 14.6 A 3.532 3.532 0 0 0 192.337 11.476 Q 189.646 9.868 183.271 9.716 A 57.557 57.557 0 0 0 181.9 9.7 Q 177.936 9.7 175.609 9.962 A 19.248 19.248 0 0 0 174.6 10.1 L 174.5 10.1 A 8.317 8.317 0 0 1 174.648 8.607 Q 174.921 7.117 175.7 5.223 A 27.072 27.072 0 0 1 175.75 5.1 A 38.034 38.034 0 0 1 176.314 3.809 Q 177.135 2.028 177.755 1.306 A 3.001 3.001 0 0 1 177.85 1.2 A 1.536 1.536 0 0 1 178.451 0.86 Q 180.029 0.3 185 0.3 Q 195.808 0.3 201.223 4.21 A 13.759 13.759 0 0 1 201.8 4.65 A 13.734 13.734 0 0 1 206.376 11.715 Q 207.046 14.015 207.171 16.792 A 28.968 28.968 0 0 1 207.2 18.1 Z M 48.6 32 L 48.4 9.3 Q 48.4 3.472 48.791 3.011 A 0.173 0.173 0 0 1 48.8 3 A 4.977 4.977 0 0 1 49.644 2.337 Q 50.579 1.74 52.059 1.229 A 20.567 20.567 0 0 1 52.6 1.05 Q 55.3 0.2 57.65 0.2 Q 60 0.2 60 0.7 A 46.368 46.368 0 0 0 59.785 3.396 Q 59.711 4.815 59.702 6.395 A 77.652 77.652 0 0 0 59.7 6.85 Q 59.7 10.067 59.874 10.284 A 0.035 0.035 0 0 0 59.9 10.3 A 0.362 0.362 0 0 0 60.075 10.252 Q 60.135 10.22 60.194 10.165 A 1.026 1.026 0 0 0 60.3 10.05 Q 60.5 9.8 60.95 9.25 A 7.6 7.6 0 0 1 61.216 8.946 Q 61.74 8.372 62.85 7.3 Q 64.3 5.9 66 4.9 Q 70.3 2.1 75.2 2.1 A 4.346 4.346 0 0 1 75.648 3.131 Q 75.952 4.146 75.994 5.621 A 16.972 16.972 0 0 1 76 6.1 Q 76 10.573 75.138 13.013 A 6.942 6.942 0 0 1 74.6 14.2 L 74.2 15 L 72.9 14.8 A 14.016 14.016 0 0 0 67.285 15.889 Q 64.252 17.2 62.048 20.086 A 16.883 16.883 0 0 0 61.6 20.7 A 19.678 19.678 0 0 0 60.938 21.759 Q 60.011 23.363 60 24.279 A 1.825 1.825 0 0 0 60 24.3 L 60 33.1 A 794.13 794.13 0 0 1 59.996 35.917 Q 59.966 44.213 59.751 45.257 A 0.333 0.333 0 0 1 59.7 45.4 A 7.209 7.209 0 0 1 57.423 46.824 Q 55.181 47.751 51.593 48.005 A 41.156 41.156 0 0 1 48.7 48.1 A 3.259 3.259 0 0 1 48.449 48.091 Q 47.9 48.048 47.9 47.8 Q 48.472 44.614 48.577 36.09 A 334.059 334.059 0 0 0 48.6 32 Z M 152.4 12.3 L 150.3 12 A 15.957 15.957 0 0 0 145.873 12.584 A 12.061 12.061 0 0 0 140.15 16.15 A 14.422 14.422 0 0 0 136.483 24.705 A 19.097 19.097 0 0 0 136.4 26.5 A 8.718 8.718 0 0 0 137.053 29.899 A 8.285 8.285 0 0 0 138.25 31.9 A 5.984 5.984 0 0 0 141.884 34.038 A 9.126 9.126 0 0 0 143.65 34.2 A 7.449 7.449 0 0 0 149.218 31.82 A 9.67 9.67 0 0 0 149.6 31.4 Q 151.408 29.291 151.854 27.805 A 3.16 3.16 0 0 0 152 26.9 A 526.336 526.336 0 0 1 152.014 22.913 Q 152.075 14.9 152.4 12.3 Z M 27.1 29.6 L 27.1 25.8 A 79.679 79.679 0 0 0 27.099 25.284 Q 27.09 23.876 27.027 23.645 A 0.052 0.052 0 0 0 27 23.6 Q 20.3 23.6 15.4 27.1 A 8.504 8.504 0 0 0 13.667 28.702 A 6.062 6.062 0 0 0 12.3 32.6 A 4.817 4.817 0 0 0 12.699 34.58 A 4.667 4.667 0 0 0 13.8 36.1 A 4.666 4.666 0 0 0 15.478 37.081 Q 16.193 37.33 17.072 37.431 A 11.212 11.212 0 0 0 18.35 37.5 A 10.558 10.558 0 0 0 23.175 36.312 A 13.099 13.099 0 0 0 24.25 35.7 A 5.822 5.822 0 0 0 26.815 32.071 Q 27.1 30.961 27.1 29.6 Z M 196.1 29.6 L 196.1 25.8 A 79.679 79.679 0 0 0 196.099 25.284 Q 196.09 23.876 196.027 23.645 A 0.052 0.052 0 0 0 196 23.6 Q 189.3 23.6 184.4 27.1 A 8.504 8.504 0 0 0 182.667 28.702 A 6.062 6.062 0 0 0 181.3 32.6 A 4.817 4.817 0 0 0 181.699 34.58 A 4.667 4.667 0 0 0 182.8 36.1 A 4.666 4.666 0 0 0 184.478 37.081 Q 185.193 37.33 186.072 37.431 A 11.212 11.212 0 0 0 187.35 37.5 A 10.558 10.558 0 0 0 192.175 36.312 A 13.099 13.099 0 0 0 193.25 35.7 A 5.822 5.822 0 0 0 195.815 32.071 Q 196.1 30.961 196.1 29.6 Z"
              strokeWidth="4"
              className="stroke-primary-light"
            />
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

export default LoadingPage;