import { Button } from "../UI/Button";

export function FirstSection() {
    return <div className=" r-container pt-20">
        <div className=" flex items-center lg:items-start lg:flex-row flex-col lg:justify-between gap-[30px] w-full">
            <div className=" max-w-[370px] w-full flex flex-col gap-8 sm:gap-14">
                <h2 className=" text-white font-bold text-3xl sm:text-5xl text-effect">Innovating Roblox Video Gaming</h2>
                <div className=" w-full flex justify-end">
                    <svg width="208" height="209" viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.500244" y="0.5" width="207" height="207.156" rx="103.5" stroke="#00A8FF" strokeDasharray="8 8" />
                        <rect x="14.0002" y="14" width="180" height="180.156" rx="89.9998" fill="white" fillOpacity="0.06" />
                        <path d="M116.496 32.2505C116.499 31.4536 116.196 30.7976 115.588 30.2824C114.98 29.7673 114.195 29.4509 113.234 29.3332C112.531 29.2472 111.902 29.2855 111.347 29.4484C110.797 29.6119 110.35 29.8745 110.007 30.2364C109.669 30.5989 109.469 31.0334 109.407 31.5399C109.355 31.9636 109.411 32.3403 109.575 32.6699C109.745 32.995 109.978 33.2779 110.274 33.5187C110.57 33.7543 110.886 33.9582 111.222 34.1305C111.558 34.2975 111.869 34.4379 112.154 34.5515L113.713 35.183C114.113 35.3422 114.555 35.5484 115.038 35.8016C115.526 36.0555 115.983 36.3762 116.407 36.7639C116.838 37.1471 117.174 37.6132 117.416 38.1622C117.659 38.7111 117.734 39.3577 117.643 40.1019C117.538 40.9598 117.218 41.7075 116.684 42.3449C116.155 42.983 115.436 43.4537 114.528 43.7569C113.625 44.0608 112.564 44.1381 111.345 43.9887C110.208 43.8495 109.246 43.5455 108.458 43.0767C107.677 42.6085 107.088 42.0171 106.693 41.3026C106.303 40.5886 106.13 39.7938 106.174 38.9179L108.159 39.1609C108.137 39.7668 108.278 40.2876 108.581 40.7234C108.891 41.1546 109.305 41.4991 109.824 41.7568C110.349 42.0099 110.927 42.1751 111.557 42.2523C112.291 42.3421 112.965 42.3039 113.578 42.1377C114.191 41.9663 114.695 41.687 115.089 41.2998C115.483 40.9075 115.716 40.4219 115.786 39.8431C115.851 39.316 115.756 38.869 115.502 38.5021C115.248 38.1353 114.893 37.8191 114.438 37.5536C113.983 37.288 113.485 37.0435 112.946 36.8201L111.061 36.0228C109.864 35.5143 108.945 34.885 108.302 34.1349C107.66 33.3848 107.404 32.4749 107.535 31.4051C107.644 30.5162 107.979 29.7704 108.541 29.1677C109.108 28.5606 109.823 28.1235 110.684 27.8565C111.551 27.5851 112.491 27.5113 113.504 27.6354C114.528 27.7607 115.415 28.0555 116.166 28.5199C116.917 28.9791 117.487 29.5524 117.875 30.2399C118.268 30.928 118.428 31.6741 118.356 32.4783L116.496 32.2505Z" fill="white" />
                        <path d="M129.536 43.4548L132.017 36.8115L133.744 37.4563L129.547 48.6943L127.82 48.0495L128.531 46.1472L128.413 46.1035C127.937 46.5758 127.346 46.9081 126.641 47.1005C125.937 47.2879 125.161 47.2231 124.312 46.9062C123.61 46.6439 123.043 46.2571 122.611 45.7458C122.182 45.2296 121.927 44.6011 121.848 43.8602C121.771 43.1144 121.911 42.2635 122.268 41.3075L124.935 34.1666L126.661 34.8114L124.038 41.8352C123.732 42.6546 123.717 43.3939 123.994 44.0528C124.275 44.7136 124.774 45.1779 125.491 45.4457C125.92 45.606 126.398 45.6593 126.924 45.6055C127.454 45.5536 127.956 45.3573 128.428 45.0166C128.904 44.6778 129.274 44.1572 129.536 43.4548Z" fill="white" />
                        <path d="M130.925 54.3606L140.061 40.6273L141.544 41.6136L140.488 43.2002L140.67 43.3214C140.899 43.2229 141.202 43.1057 141.58 42.9696C141.965 42.832 142.417 42.7825 142.936 42.821C143.461 42.858 144.049 43.0928 144.7 43.5254C145.541 44.0849 146.142 44.7883 146.504 45.6356C146.866 46.4829 146.97 47.4121 146.816 48.423C146.663 49.434 146.237 50.4641 145.539 51.5131C144.835 52.5709 144.046 53.368 143.17 53.9046C142.296 54.4369 141.4 54.7035 140.48 54.7044C139.563 54.7009 138.688 54.4223 137.856 53.8686C137.215 53.4418 136.772 52.9939 136.527 52.5248C136.285 52.0514 136.151 51.6089 136.125 51.1974C136.101 50.7815 136.094 50.445 136.102 50.188L135.972 50.1015L132.46 55.3815L130.925 54.3606ZM138.248 46.6248C137.746 47.3791 137.414 48.1181 137.251 48.8417C137.092 49.561 137.116 50.2245 137.325 50.8323C137.536 51.4357 137.95 51.9422 138.565 52.3517C139.207 52.7785 139.855 52.9656 140.509 52.913C141.17 52.8589 141.801 52.6157 142.401 52.1833C143.009 51.7495 143.549 51.1772 144.022 50.4662C144.489 49.764 144.802 49.0589 144.96 48.3512C145.125 47.642 145.101 46.9785 144.886 46.3606C144.679 45.7413 144.251 45.2154 143.6 44.7828C142.976 44.3675 142.346 44.1768 141.711 44.2106C141.079 44.2401 140.467 44.4645 139.875 44.8839C139.286 45.2989 138.744 45.8792 138.248 46.6248Z" fill="white" />
                        <path d="M148.207 62.705C147.413 61.865 146.913 60.9652 146.708 60.0055C146.51 59.046 146.591 58.0851 146.949 57.1229C147.315 56.1608 147.945 55.2577 148.838 54.4136C149.731 53.5695 150.671 52.9882 151.66 52.6698C152.656 52.3516 153.622 52.3051 154.559 52.5303C155.503 52.7557 156.347 53.2619 157.091 54.0489C157.52 54.5029 157.868 55.0228 158.135 55.6086C158.402 56.1943 158.537 56.8298 158.54 57.5149C158.547 58.1965 158.374 58.908 158.022 59.6494C157.669 60.3909 157.086 61.1461 156.273 61.9151L155.705 62.4516L149.353 55.7319L150.511 54.6374L155.576 59.995C156.067 59.53 156.413 59.0168 156.613 58.4552C156.817 57.8974 156.86 57.3333 156.744 56.7628C156.631 56.1961 156.345 55.6706 155.887 55.1863C155.383 54.6528 154.814 54.3164 154.181 54.1771C153.555 54.0379 152.934 54.0628 152.317 54.2517C151.7 54.4407 151.152 54.7623 150.671 55.2165L149.899 55.9462C149.241 56.5685 148.79 57.2096 148.547 57.8694C148.311 58.5294 148.267 59.1764 148.415 59.8104C148.567 60.4408 148.899 61.0265 149.41 61.5676C149.743 61.9194 150.092 62.1908 150.459 62.3815C150.833 62.5725 151.219 62.6773 151.616 62.6958C152.017 62.7108 152.422 62.6319 152.832 62.4593L153.692 64.0966C153.125 64.3753 152.522 64.5113 151.885 64.5044C151.252 64.494 150.619 64.3399 149.987 64.0422C149.358 63.741 148.765 63.2952 148.207 62.705Z" fill="white" />
                        <path d="M153.7 68.9713L163.764 62.4436L164.733 63.9375L163.213 64.9235L163.281 65.0283C163.898 64.8888 164.518 64.9587 165.139 65.2381C165.761 65.5174 166.268 65.9585 166.659 66.5613C166.732 66.6749 166.822 66.8183 166.928 66.9915C167.034 67.1647 167.111 67.2978 167.159 67.3908L165.587 68.4108C165.566 68.3499 165.508 68.217 165.412 68.0122C165.324 67.8089 165.213 67.6046 165.08 67.3993C164.762 66.91 164.376 66.5398 163.922 66.2885C163.474 66.0388 162.999 65.9187 162.497 65.9282C162.001 65.9393 161.526 66.0922 161.072 66.3868L154.703 70.5177L153.7 68.9713Z" fill="white" />
                        <path d="M161.147 82.7019L176.537 78.3465L178.009 83.5468C178.349 84.7492 178.423 85.7943 178.23 86.682C178.043 87.5684 177.646 88.2976 177.04 88.8697C176.433 89.4417 175.676 89.8561 174.77 90.1127C173.863 90.3693 173.006 90.4115 172.2 90.2392C171.394 90.067 170.682 89.6543 170.064 89.0012C169.451 88.3467 168.976 87.4233 168.639 86.2309L167.448 82.0226L169.131 81.5463L170.305 85.6944C170.538 86.5161 170.845 87.1433 171.227 87.5763C171.611 88.0142 172.055 88.2835 172.56 88.3842C173.071 88.4885 173.634 88.4534 174.251 88.2791C174.867 88.1047 175.373 87.837 175.769 87.4761C176.164 87.1153 176.416 86.6464 176.523 86.0695C176.635 85.4912 176.574 84.7862 176.338 83.9546L175.411 80.6781L161.674 84.5656L161.147 82.7019ZM170.11 87.9897L164.269 93.7337L163.656 91.5694L169.515 85.8856L170.11 87.9897Z" fill="white" />
                        <path d="M164.49 101.485C164.445 100.403 164.663 99.4432 165.144 98.605C165.625 97.772 166.319 97.1072 167.226 96.6108C168.133 96.1196 169.206 95.8482 170.444 95.7965C171.692 95.7444 172.791 95.9252 173.741 96.3389C174.692 96.7579 175.441 97.3624 175.99 98.1524C176.539 98.9476 176.836 99.8863 176.882 100.968C176.927 102.05 176.709 103.008 176.228 103.841C175.747 104.679 175.05 105.344 174.138 105.835C173.226 106.332 172.145 106.606 170.897 106.658C169.659 106.71 168.567 106.526 167.622 106.107C166.677 105.693 165.93 105.089 165.381 104.293C164.832 103.503 164.535 102.567 164.49 101.485ZM166.144 101.416C166.179 102.238 166.418 102.906 166.861 103.419C167.305 103.932 167.875 104.301 168.572 104.528C169.27 104.754 170.019 104.85 170.82 104.817C171.621 104.784 172.362 104.625 173.044 104.341C173.725 104.057 174.268 103.641 174.672 103.093C175.077 102.544 175.262 101.859 175.227 101.037C175.193 100.215 174.952 99.548 174.503 99.0352C174.054 98.5224 173.478 98.153 172.776 97.9269C172.073 97.7009 171.322 97.6046 170.52 97.638C169.719 97.6715 168.981 97.83 168.305 98.1135C167.629 98.3971 167.091 98.8129 166.692 99.3611C166.293 99.9093 166.11 100.594 166.144 101.416Z" fill="white" />
                        <path d="M164.617 110.823L180.329 113.816L179.984 115.626L174.184 114.522L174.155 114.675C174.334 114.847 174.56 115.081 174.833 115.376C175.109 115.678 175.33 116.076 175.496 116.568C175.666 117.067 175.678 117.7 175.532 118.467C175.343 119.459 174.928 120.287 174.288 120.949C173.647 121.612 172.832 122.069 171.84 122.32C170.849 122.571 169.735 122.578 168.497 122.343C167.249 122.105 166.207 121.687 165.373 121.088C164.543 120.49 163.949 119.767 163.591 118.92C163.239 118.073 163.156 117.159 163.343 116.177C163.487 115.42 163.728 114.838 164.065 114.43C164.407 114.024 164.763 113.729 165.132 113.545C165.506 113.361 165.813 113.224 166.054 113.132L166.094 112.917L164.284 112.572L164.617 110.823ZM170.17 113.725C169.28 113.556 168.47 113.536 167.74 113.668C167.015 113.8 166.414 114.08 165.934 114.508C165.46 114.937 165.154 115.515 165.016 116.241C164.872 116.998 164.951 117.668 165.253 118.25C165.56 118.839 166.029 119.326 166.661 119.711C167.296 120.102 168.034 120.378 168.872 120.538C169.701 120.696 170.472 120.71 171.186 120.581C171.903 120.458 172.505 120.178 172.992 119.74C173.482 119.309 173.8 118.71 173.946 117.943C174.086 117.206 174.018 116.552 173.74 115.979C173.467 115.408 173.023 114.931 172.406 114.549C171.795 114.167 171.05 113.893 170.17 113.725Z" fill="white" />
                        <path d="M175.788 131.412L160.776 125.893L161.412 124.163L176.425 129.682L175.788 131.412Z" fill="white" />
                        <path d="M156.797 133.755C157.324 132.809 158.013 132.105 158.861 131.642C159.707 131.184 160.646 130.981 161.679 131.033C162.709 131.089 163.765 131.419 164.847 132.023C165.938 132.632 166.78 133.361 167.373 134.211C167.964 135.065 168.286 135.973 168.34 136.933C168.392 137.898 168.154 138.853 167.626 139.799C167.099 140.745 166.412 141.446 165.566 141.905C164.717 142.367 163.776 142.569 162.741 142.51C161.704 142.456 160.64 142.125 159.549 141.516C158.467 140.912 157.633 140.184 157.047 139.332C156.458 138.485 156.138 137.579 156.086 136.614C156.032 135.653 156.269 134.7 156.797 133.755ZM158.242 134.562C157.842 135.28 157.696 135.974 157.805 136.643C157.915 137.312 158.207 137.926 158.683 138.484C159.159 139.041 159.747 139.515 160.447 139.906C161.147 140.297 161.862 140.55 162.591 140.664C163.32 140.779 164 140.709 164.632 140.453C165.263 140.197 165.78 139.71 166.181 138.992C166.581 138.274 166.725 137.579 166.611 136.907C166.497 136.235 166.2 135.619 165.719 135.059C165.239 134.498 164.649 134.023 163.949 133.632C163.249 133.241 162.536 132.99 161.812 132.878C161.087 132.766 160.412 132.839 159.784 133.097C159.157 133.355 158.643 133.843 158.242 134.562Z" fill="white" />
                        <path d="M160.572 150.003L154.992 148.918L156.772 154.316L155.368 155.91L153.428 149.039L146.367 147.98L147.771 146.386L153.163 147.307L151.571 142.073L152.975 140.479L154.956 147.304L161.976 148.409L160.572 150.003Z" fill="white" />
                        <path d="M145.642 168.825L134.947 159.368L134.783 159.459L137.18 173.534L135.405 174.521L132.761 157.688L134.508 156.716L147.417 167.838L145.642 168.825Z" fill="white" />
                        <path d="M124.58 161.341L128.461 172.692L126.716 173.289L122.836 161.938L124.58 161.341ZM128.221 174.887C128.56 174.771 128.893 174.787 129.219 174.934C129.539 175.083 129.755 175.32 129.866 175.645C129.977 175.97 129.952 176.29 129.79 176.604C129.622 176.92 129.369 177.136 129.029 177.252C128.689 177.368 128.359 177.352 128.038 177.203C127.713 177.056 127.494 176.819 127.383 176.494C127.272 176.169 127.3 175.849 127.467 175.533C127.629 175.219 127.881 175.004 128.221 174.887Z" fill="white" />
                        <path d="M114.536 163.748C115.522 163.583 116.434 163.686 117.273 164.058C118.112 164.435 118.821 165.045 119.4 165.888C119.98 166.736 120.374 167.787 120.584 169.04C120.791 170.283 120.758 171.397 120.485 172.382C120.212 173.367 119.736 174.173 119.06 174.798C118.383 175.423 117.546 175.819 116.55 175.985C115.78 176.114 115.15 176.087 114.66 175.905C114.166 175.729 113.774 175.499 113.484 175.215C113.189 174.937 112.958 174.706 112.79 174.523L112.636 174.549L113.609 180.373L111.791 180.676L109.155 164.9L110.911 164.607L111.215 166.425L111.43 166.389C111.528 166.151 111.672 165.847 111.864 165.477C112.056 165.112 112.36 164.763 112.774 164.43C113.189 164.102 113.776 163.875 114.536 163.748ZM114.563 165.422C113.834 165.544 113.249 165.837 112.809 166.301C112.37 166.77 112.077 167.366 111.928 168.087C111.78 168.814 111.781 169.624 111.931 170.518C112.078 171.401 112.336 172.152 112.703 172.772C113.072 173.397 113.538 173.852 114.103 174.137C114.669 174.428 115.322 174.512 116.061 174.388C116.832 174.259 117.441 173.954 117.888 173.473C118.331 172.998 118.625 172.402 118.769 171.687C118.909 170.977 118.91 170.206 118.771 169.374C118.63 168.532 118.374 167.788 118.002 167.143C117.626 166.504 117.15 166.024 116.574 165.703C115.993 165.389 115.323 165.295 114.563 165.422Z" fill="white" />
                        <path d="M99.8986 164.53C101.052 164.601 102.032 164.917 102.837 165.477C103.637 166.043 104.235 166.8 104.631 167.747C105.021 168.7 105.178 169.789 105.103 171.016C105.028 172.242 104.738 173.309 104.234 174.217C103.724 175.13 103.05 175.824 102.212 176.3C101.369 176.78 100.407 176.987 99.3259 176.921C98.7023 176.882 98.0929 176.741 97.4976 176.496C96.9023 176.25 96.3696 175.879 95.8994 175.38C95.4289 174.887 95.069 174.249 94.8196 173.467C94.5703 172.685 94.4799 171.736 94.5485 170.618L94.5963 169.839L103.826 170.405L103.728 171.995L96.3696 171.544C96.3281 172.219 96.4262 172.83 96.6639 173.377C96.8965 173.923 97.2502 174.365 97.725 174.702C98.1947 175.039 98.7622 175.227 99.4274 175.268C100.16 175.313 100.805 175.17 101.363 174.839C101.915 174.513 102.352 174.07 102.673 173.511C102.994 172.952 103.175 172.342 103.215 171.682L103.281 170.622C103.336 169.718 103.227 168.942 102.954 168.294C102.675 167.651 102.265 167.148 101.724 166.786C101.183 166.43 100.54 166.229 99.7971 166.183C99.3138 166.153 98.8731 166.194 98.4751 166.305C98.0715 166.421 97.7184 166.608 97.4156 166.866C97.1126 167.129 96.8704 167.464 96.6889 167.87L94.9422 167.262C95.1663 166.671 95.5132 166.16 95.983 165.73C96.4525 165.305 97.0199 164.985 97.6851 164.77C98.35 164.56 99.0878 164.481 99.8986 164.53Z" fill="white" />
                        <path d="M86.8418 162.208C87.8805 162.515 88.719 163.031 89.3573 163.756C89.9906 164.48 90.3959 165.352 90.5732 166.37C90.7456 167.387 90.6565 168.49 90.306 169.679C89.9525 170.877 89.4268 171.86 88.7287 172.625C88.0256 173.39 87.2116 173.904 86.2868 174.169C85.3569 174.432 84.3726 174.41 83.3338 174.104C82.2951 173.798 81.4591 173.283 80.8258 172.558C80.1875 171.833 79.783 170.959 79.6121 169.937C79.4362 168.913 79.525 167.802 79.8785 166.604C80.229 165.415 80.755 164.441 81.4566 163.682C82.1532 162.921 82.9665 162.409 83.8963 162.146C84.8212 161.881 85.803 161.902 86.8418 162.208ZM86.3735 163.797C85.5844 163.564 84.8755 163.575 84.2469 163.829C83.6182 164.083 83.0843 164.504 82.6452 165.091C82.2061 165.678 81.8731 166.356 81.6463 167.125C81.4196 167.894 81.3306 168.647 81.3794 169.383C81.4283 170.12 81.647 170.768 82.0356 171.327C82.4243 171.887 83.0131 172.283 83.8022 172.516C84.5912 172.749 85.3008 172.735 85.931 172.476C86.5611 172.217 87.0965 171.791 87.537 171.199C87.9776 170.607 88.3113 169.927 88.5381 169.157C88.7649 168.388 88.8531 167.638 88.8028 166.907C88.7525 166.175 88.5323 165.532 88.1422 164.978C87.7521 164.423 87.1625 164.029 86.3735 163.797Z" fill="white" />
                        <path d="M56.7757 158.43C56.5938 158.952 56.4885 159.464 56.4598 159.966C56.4239 160.469 56.4692 160.955 56.596 161.425C56.7185 161.891 56.9251 162.333 57.2157 162.751C57.5063 163.168 57.8815 163.552 58.3413 163.902C59.0952 164.476 59.929 164.804 60.8427 164.884C61.7564 164.965 62.6842 164.765 63.626 164.285C64.5678 163.804 65.4582 163.013 66.2973 161.911C67.1364 160.809 67.6602 159.739 67.8688 158.7C68.0774 157.662 68.0152 156.708 67.6821 155.839C67.349 154.97 66.7889 154.236 66.0019 153.637C65.2728 153.081 64.5125 152.748 63.7208 152.636C62.9219 152.525 62.1494 152.637 61.4034 152.972C60.6502 153.308 59.977 153.865 59.384 154.644L58.9875 154.185L62.8149 157.1L61.7739 158.467L56.9275 154.776L57.9685 153.409C58.7665 152.361 59.6842 151.62 60.7214 151.186C61.7546 150.749 62.825 150.615 63.9328 150.785C65.0333 150.955 66.0889 151.425 67.0996 152.195C68.2263 153.053 69.0144 154.072 69.464 155.252C69.9094 156.429 69.998 157.688 69.7299 159.028C69.4577 160.365 68.8106 161.705 67.7885 163.047C67.022 164.053 66.1981 164.856 65.3169 165.455C64.4284 166.054 63.5195 166.448 62.5903 166.637C61.661 166.826 60.7416 166.813 59.832 166.598C58.9224 166.383 58.0596 165.965 57.2436 165.344C56.5725 164.833 56.0243 164.255 55.599 163.61C55.1663 162.967 54.8625 162.287 54.6876 161.571C54.5054 160.857 54.4551 160.128 54.5365 159.385C54.6149 158.646 54.831 157.924 55.1851 157.219L56.7757 158.43Z" fill="white" />
                        <path d="M57.1791 142.526C57.6526 143.12 57.9703 143.749 58.1323 144.412C58.2901 145.078 58.2688 145.724 58.0681 146.35C57.8634 146.979 57.4556 147.537 56.8446 148.023C56.307 148.451 55.7868 148.693 55.2842 148.747C54.7775 148.804 54.2873 148.732 53.8137 148.53C53.3401 148.328 52.8862 148.05 52.4519 147.697C52.0104 147.343 51.5876 146.971 51.1835 146.581C50.6562 146.069 50.2331 145.651 49.9142 145.325C49.5881 144.999 49.3133 144.792 49.0899 144.704C48.8632 144.612 48.6338 144.658 48.4017 144.843L48.3528 144.882C47.75 145.362 47.4129 145.899 47.3416 146.495C47.2671 147.087 47.4942 147.715 48.0228 148.379C48.571 149.067 49.1514 149.487 49.7642 149.638C50.3769 149.789 50.9176 149.808 51.3863 149.694L51.9873 151.452C51.2224 151.662 50.519 151.689 49.877 151.535C49.2276 151.38 48.6468 151.11 48.1346 150.726C47.6151 150.341 47.1672 149.912 46.791 149.44C46.551 149.138 46.3119 148.763 46.0739 148.314C45.8285 147.863 45.6699 147.367 45.5979 146.826C45.5227 146.28 45.6098 145.708 45.8592 145.11C46.1085 144.512 46.6059 143.916 47.3513 143.323L53.5342 138.4L54.6823 139.841L53.4115 140.853L53.4699 140.927C53.7514 140.862 54.099 140.852 54.5128 140.895C54.9266 140.938 55.3658 141.084 55.8303 141.333C56.2949 141.582 56.7445 141.98 57.1791 142.526ZM55.7087 143.337C55.2546 142.767 54.7599 142.375 54.2245 142.163C53.6859 141.946 53.16 141.879 52.6467 141.962C52.1302 142.04 51.6764 142.235 51.2854 142.546L49.9657 143.597C50.0877 143.6 50.2619 143.681 50.4884 143.84C50.7076 143.998 50.9466 144.194 51.2055 144.427C51.457 144.659 51.6997 144.889 51.9333 145.115C52.1597 145.341 52.3447 145.523 52.4883 145.662C52.8355 145.998 53.1939 146.285 53.5633 146.523C53.9255 146.76 54.2939 146.893 54.6687 146.921C55.0362 146.947 55.4032 146.815 55.7698 146.523C56.2708 146.124 56.502 145.637 56.4635 145.062C56.4176 144.486 56.166 143.911 55.7087 143.337Z" fill="white" />
                        <path d="M50.969 134.994L39.9127 139.649L39.2218 138.008L40.9493 137.281L40.8887 137.137C40.2015 137.155 39.5867 136.976 39.0442 136.6C38.4969 136.226 38.0718 135.679 37.7687 134.959C37.4617 134.229 37.3717 133.553 37.4987 132.929C37.619 132.302 37.9166 131.727 38.3917 131.205L38.3432 131.09C37.653 131.048 37.0207 130.814 36.4464 130.389C35.8673 129.966 35.4111 129.359 35.0778 128.567C34.6616 127.578 34.6307 126.64 34.9851 125.75C35.3347 124.863 36.1597 124.146 37.4602 123.598L44.8598 120.483L45.575 122.182L38.1753 125.297C37.3596 125.64 36.8705 126.109 36.708 126.703C36.5456 127.297 36.5917 127.896 36.8462 128.5C37.1735 129.278 37.6622 129.781 38.3122 130.01C38.9575 130.241 39.6377 130.206 40.3527 129.905L47.5508 126.875L48.278 128.603L40.7056 131.79C40.077 132.055 39.6566 132.472 39.4444 133.042C39.2275 133.613 39.2543 134.22 39.525 134.864C39.7109 135.305 40.0022 135.668 40.3989 135.953C40.7937 136.233 41.2493 136.403 41.7658 136.462C42.2754 136.519 42.8014 136.433 43.3436 136.205L50.2538 133.296L50.969 134.994Z" fill="white" />
                        <path d="M44.3549 116.26L32.5619 118.458L32.2242 116.646L44.0171 114.448L44.3549 116.26ZM30.4247 117.903C30.4905 118.257 30.427 118.584 30.2341 118.884C30.0403 119.18 29.7745 119.359 29.4367 119.422C29.0989 119.485 28.7863 119.414 28.499 119.208C28.2107 118.997 28.0336 118.715 27.9678 118.361C27.902 118.008 27.966 117.684 28.1598 117.388C28.3527 117.087 28.618 116.905 28.9558 116.843C29.2936 116.78 29.6067 116.854 29.895 117.065C30.1823 117.271 30.3589 117.55 30.4247 117.903Z" fill="white" />
                        <path d="M36.03 108.883L43.2438 108.692L43.2926 110.534L31.3007 110.851L31.2536 109.071L33.1273 109.022L33.1232 108.866C32.5068 108.601 32.0062 108.187 31.6215 107.624C31.2316 107.062 31.0247 106.327 31.0007 105.422C30.9793 104.61 31.127 103.895 31.444 103.277C31.7558 102.66 32.2429 102.173 32.9054 101.817C33.5626 101.461 34.4013 101.269 35.4215 101.242L43.0413 101.041L43.0901 102.883L35.5952 103.081C34.6531 103.106 33.9257 103.37 33.4129 103.874C32.895 104.377 32.6473 105.055 32.6699 105.909C32.6855 106.497 32.8269 107.019 33.0942 107.476C33.3614 107.927 33.7431 108.279 34.2394 108.531C34.7356 108.784 35.3325 108.901 36.03 108.883Z" fill="white" />
                        <path d="M48.9874 92.9995C48.8089 93.8718 48.5433 94.5987 48.1905 95.1802C47.8429 95.7627 47.4451 96.2261 46.9974 96.5703C46.5558 96.9104 46.1059 97.1612 45.6478 97.3226L44.932 95.6775C45.1797 95.5581 45.4668 95.4016 45.7934 95.208C46.125 95.0154 46.4373 94.7232 46.73 94.3314C47.0289 93.9354 47.2508 93.383 47.3959 92.6739C47.59 91.7251 47.5206 90.8952 47.1877 90.1841C46.8549 89.4729 46.1988 89.0172 45.2194 88.8168L42.8321 88.3285L42.8008 88.4815C42.9879 88.658 43.2146 88.901 43.4808 89.2105C43.7429 89.5139 43.9499 89.9177 44.1019 90.4217C44.2498 90.9197 44.2455 91.5512 44.089 92.3164C43.8949 93.2651 43.4962 94.0711 42.8929 94.7342C42.2906 95.3922 41.5161 95.8529 40.5694 96.1163C39.6238 96.3746 38.5388 96.3785 37.3146 96.1281C36.1107 95.8818 35.1058 95.4557 34.2997 94.8497C33.4886 94.2427 32.9153 93.5116 32.5801 92.6565C32.2397 91.8003 32.1707 90.8775 32.3732 89.8879C32.5297 89.1227 32.7814 88.5418 33.1283 88.1451C33.4711 87.7422 33.8277 87.4538 34.1981 87.2798C34.5645 87.0996 34.8632 86.9641 35.0944 86.8732L35.1319 86.6896L33.265 86.3077L33.6218 84.5631L45.7112 87.0361C46.7212 87.2427 47.4955 87.6403 48.0341 88.2288C48.5789 88.8132 48.9204 89.5208 49.0587 90.3515C49.2032 91.1783 49.1794 92.0609 48.9874 92.9995ZM42.517 91.7397C42.6652 91.0153 42.6246 90.3693 42.3953 89.8016C42.166 89.2339 41.7668 88.7563 41.1977 88.3688C40.6286 87.9814 39.9104 87.6989 39.0433 87.5216C38.1965 87.3483 37.4231 87.323 36.7231 87.4455C36.0231 87.5681 35.4383 87.8417 34.9688 88.2665C34.4993 88.6912 34.1894 89.2709 34.0391 90.0054C33.8826 90.7706 33.946 91.4479 34.2293 92.0373C34.5137 92.6216 34.9563 93.108 35.557 93.4967C36.1588 93.8802 36.8576 94.1533 37.6534 94.3161C38.4695 94.483 39.2174 94.5032 39.897 94.3765C40.5725 94.2436 41.1405 93.9612 41.6009 93.5293C42.0572 93.0912 42.3626 92.4946 42.517 91.7397Z" fill="white" />
                        <path d="M45.5709 64.9908L45.1409 66.6569C44.8501 66.6077 44.5411 66.6052 44.2139 66.6493C43.8848 66.6863 43.5595 66.8099 43.2378 67.0201C42.9162 67.2302 42.6202 67.5669 42.3499 68.03C41.9798 68.6641 41.8175 69.2777 41.8631 69.871C41.9067 70.4572 42.1511 70.8802 42.5963 71.1401C42.992 71.371 43.3885 71.4096 43.7858 71.2557C44.1832 71.1017 44.6367 70.7636 45.1466 70.2413L46.422 68.924C47.1875 68.1289 47.9344 67.6395 48.6627 67.4557C49.3864 67.2693 50.1103 67.3873 50.8343 67.8099C51.4278 68.1564 51.8587 68.637 52.1268 69.2517C52.3976 69.8619 52.4907 70.5493 52.4062 71.3139C52.3216 72.0784 52.0444 72.8631 51.5746 73.668C50.9578 74.7247 50.2179 75.4654 49.355 75.8902C48.4922 76.3149 47.5663 76.3622 46.5773 76.0321L47.0815 74.3008C47.7231 74.4824 48.3001 74.4544 48.8125 74.217C49.3275 73.975 49.7753 73.528 50.1559 72.876C50.589 72.1341 50.7755 71.4532 50.7153 70.8333C50.6533 70.2062 50.3997 69.7628 49.9545 69.5029C49.5948 69.2929 49.22 69.243 48.8302 69.3531C48.4359 69.4605 48.0258 69.7396 47.5999 70.1903L46.1873 71.6808C45.4087 72.4983 44.6533 72.9919 43.9213 73.1615C43.1874 73.3239 42.463 73.1964 41.7481 72.7791C41.1635 72.4379 40.7422 71.9719 40.4842 71.3812C40.2287 70.7859 40.1395 70.128 40.2166 69.4073C40.2963 68.6821 40.5487 67.9553 40.9739 67.2269C41.5724 66.2016 42.267 65.528 43.0579 65.2059C43.8514 64.8793 44.6891 64.8076 45.5709 64.9908Z" fill="white" />
                        <path d="M55.8305 66.8907L46.4616 59.3987L47.6127 57.9592L56.9816 65.4512L55.8305 66.8907ZM45.4854 57.4181C45.261 57.6987 44.972 57.8642 44.6183 57.9147C44.2678 57.9611 43.9584 57.877 43.69 57.6624C43.4217 57.4478 43.2716 57.1645 43.2398 56.8124C43.2113 56.4562 43.3092 56.1379 43.5336 55.8573C43.7579 55.5767 44.0453 55.4132 44.3958 55.3668C44.7495 55.3163 45.0605 55.3984 45.3289 55.613C45.5973 55.8276 45.7458 56.113 45.7743 56.4691C45.8061 56.8212 45.7098 57.1375 45.4854 57.4181Z" fill="white" />
                        <path d="M54.6217 50.4279L55.7316 51.527L51.3575 55.9445L50.2475 54.8454L54.6217 50.4279ZM49.4802 51.5357L50.777 50.226L58.9017 58.2709C59.2717 58.6373 59.6023 58.8584 59.8935 58.9343C60.1847 59.0028 60.446 58.9831 60.6774 58.8752C60.9088 58.7599 61.1197 58.6061 61.3102 58.4137C61.4531 58.2694 61.5629 58.1437 61.6397 58.0365C61.7128 57.9257 61.7713 57.8371 61.8151 57.7706L63.2554 58.6692C63.2008 58.791 63.1114 58.9479 62.9871 59.1399C62.8666 59.3357 62.6854 59.5556 62.4436 59.7998C62.0773 60.1698 61.6387 60.4536 61.128 60.6512C60.6208 60.8452 60.0891 60.8975 59.5327 60.8082C58.98 60.7152 58.4558 60.4232 57.96 59.9323L49.4802 51.5357Z" fill="white" />
                        <path d="M69.072 54.5682C68.1311 55.2396 67.1713 55.611 66.1926 55.6826C65.215 55.7468 64.2743 55.5354 63.3703 55.0484C62.4674 54.554 61.6592 53.8067 60.9455 52.8065C60.2318 51.8063 59.785 50.7946 59.6051 49.7717C59.4265 48.7414 59.5129 47.7779 59.8644 46.8811C60.2171 45.977 60.8342 45.2104 61.7158 44.5814C62.2244 44.2185 62.7871 43.9449 63.404 43.7606C64.0208 43.5763 64.6688 43.5297 65.3478 43.6208C66.0239 43.7077 66.705 43.9765 67.3911 44.4272C68.0772 44.8778 68.7454 45.5588 69.3956 46.47L69.8492 47.1057L62.322 52.4767L61.3966 51.1798L67.3981 46.8975C67.0049 46.3465 66.5439 45.9335 66.015 45.6585C65.4904 45.3804 64.9376 45.26 64.3565 45.2972C63.7797 45.3314 63.22 45.5421 62.6775 45.9292C62.0799 46.3556 61.6687 46.8729 61.4438 47.4811C61.2202 48.082 61.1597 48.7008 61.2622 49.3376C61.3648 49.9744 61.6081 50.5619 61.9922 51.1002L62.6092 51.9648C63.1354 52.7023 63.7086 53.2367 64.3288 53.5681C64.9502 53.8922 65.5851 54.0245 66.2334 53.9649C66.8786 53.901 67.5043 53.6529 68.1103 53.2204C68.5045 52.9392 68.8212 52.63 69.0604 52.293C69.3009 51.9487 69.4575 51.5811 69.5304 51.1902C69.6002 50.795 69.5777 50.3825 69.4629 49.9527L71.2027 49.3253C71.4009 49.9258 71.453 50.5411 71.3589 51.1711C71.2617 51.7969 71.0223 52.4026 70.6407 52.9883C70.2561 53.5698 69.7332 54.0964 69.072 54.5682Z" fill="white" />
                        <path d="M80.1891 37.9451L78.8551 39.032C78.6501 38.82 78.4027 38.6348 78.113 38.4764C77.8261 38.3111 77.4908 38.2178 77.1072 38.1964C76.7236 38.175 76.2856 38.2706 75.7934 38.4834C75.1195 38.7746 74.625 39.1726 74.31 39.6774C73.9977 40.1754 73.9438 40.661 74.1483 41.1341C74.33 41.5547 74.6265 41.8208 75.0377 41.9324C75.4489 42.0439 76.0147 42.0405 76.7349 41.9221L78.543 41.6172C79.6308 41.4307 80.5224 41.4793 81.2179 41.763C81.9113 42.0419 82.4243 42.5661 82.7568 43.3355C83.0294 43.9664 83.0915 44.6089 82.9431 45.2629C82.7995 45.9149 82.467 46.5237 81.9457 47.0893C81.4244 47.6549 80.736 48.1225 79.8805 48.4922C78.7573 48.9776 77.7224 49.1356 76.7756 48.9662C75.8289 48.7967 75.0552 48.286 74.4544 47.4339L75.8868 46.3384C76.2959 46.865 76.7771 47.1845 77.3305 47.297C77.8887 47.4075 78.5144 47.3129 79.2074 47.0135C79.996 46.6727 80.5498 46.2348 80.8688 45.6999C81.1906 45.1581 81.2492 44.6507 81.0447 44.1775C80.8795 43.7952 80.6073 43.5328 80.2281 43.3904C79.8468 43.2431 79.3511 43.2248 78.7409 43.3354L76.7197 43.6983C75.608 43.8952 74.7071 43.8449 74.0171 43.5475C73.3298 43.2433 72.8219 42.7113 72.4935 41.9513C72.225 41.33 72.1619 40.705 72.3043 40.0763C72.4514 39.4455 72.7696 38.8627 73.2589 38.328C73.7529 37.7912 74.3871 37.3555 75.1613 37.0209C76.251 36.55 77.2098 36.4192 78.0377 36.6287C78.8704 36.836 79.5875 37.2748 80.1891 37.9451Z" fill="white" />
                        <path d="M122.155 103.518L116.59 101.927C114.083 101.221 111.8 99.8829 109.959 98.0416C108.118 96.2003 106.78 93.9172 106.073 91.4109L104.483 85.8453C104.403 85.6506 104.267 85.484 104.092 85.3668C103.917 85.2496 103.711 85.187 103.501 85.187C103.29 85.187 103.084 85.2496 102.909 85.3668C102.735 85.484 102.599 85.6506 102.519 85.8453L100.928 91.4109C100.221 93.9172 98.8835 96.2003 97.0422 98.0416C95.2008 99.8829 92.9178 101.221 90.4114 101.927L84.8459 103.518C84.6322 103.579 84.4441 103.707 84.3101 103.885C84.1762 104.062 84.1038 104.278 84.1038 104.5C84.1038 104.722 84.1762 104.938 84.3101 105.115C84.4441 105.293 84.6322 105.421 84.8459 105.482L90.4114 107.072C92.9178 107.779 95.2008 109.117 97.0422 110.958C98.8835 112.8 100.221 115.083 100.928 117.589L102.519 123.155C102.579 123.368 102.708 123.556 102.885 123.69C103.062 123.824 103.278 123.897 103.501 123.897C103.723 123.897 103.939 123.824 104.116 123.69C104.293 123.556 104.422 123.368 104.483 123.155L106.073 117.589C106.78 115.083 108.118 112.8 109.959 110.958C111.8 109.117 114.083 107.779 116.59 107.072L122.155 105.482C122.369 105.421 122.557 105.293 122.691 105.115C122.825 104.938 122.897 104.722 122.897 104.5C122.897 104.278 122.825 104.062 122.691 103.885C122.557 103.707 122.369 103.579 122.155 103.518Z" fill="#00A8FF" />
                    </svg>

                </div>
            </div>

            <div className=" w-full max-w-[770px] flex sm:flex-row flex-col items-start gap-[30px] relative">
                <div className=" w-full sm:max-w-[305px] h-[410px] overflow-hidden rounded-[20px]">
                    <img src="/assets/about/robot-1.png" className=" w-full h-full object-cover" />
                </div>
                <div className=" w-full sm:max-w-[435px] h-[340px] overflow-hidden rounded-[20px]">
                    <img src="/assets/about/robot-2.png" className=" w-full h-full object-cover" />
                </div>

                <div className=" w-full sm:absolute sm:-bottom-40 right-0 sm:max-w-[693px] bg-black rounded-[16px] p-[30px]">
                    <p className=" text-white font-normal text-lg">
                        At the forefront of gaming innovation, we are reimagining what’s possible within the Roblox universe. By pushing creative boundaries and leveraging cutting-edge technology, we create immersive and dynamic experiences that captivate players. Our team is dedicated to developing engaging gameplay, vibrant virtual worlds, and seamless interactions that elevate Roblox gaming. We’re not just building games; we’re shaping the future of the Roblox community.
                    </p>
                </div>
            </div>
        </div>
    </div>
}