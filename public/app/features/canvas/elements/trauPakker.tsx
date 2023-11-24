import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';

import { CanvasElementItem, CanvasElementProps } from '../element';

interface TrauPakkerData {
  state?: number;
}

interface TrauPakkerConfig {
  state?: ScalarDimensionConfig;
}

const TrauPakkerDisplay = ({ data }: CanvasElementProps<TrauPakkerConfig, TrauPakkerData>) => {
  const styles = useStyles2(getStyles);

  if (data?.state === 0) {
    //Return SVG for state 0
    return (
        <svg width="222" height="79" viewBox="0 0 222 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="222" height="79" fill="#F5F5F5" />
    <g id="Multilinje canvas">
        <rect x="-832" y="-99" width="1920.72" height="800.748" rx="2" fill="white" />
        <rect x="-831.5" y="-98.5" width="1919.72" height="799.748" rx="1.5" stroke="black"
            strokeOpacity="0.1" />
        <g id="Group 16" filter="url(#filter0_d_0_1)">
            <path id="Rectangle 26"
                d="M18 28C21.866 28 25 31.134 25 35C25 38.866 21.866 42 18 42L-73 42C-76.866 42 -80 38.866 -80 35C-80 31.134 -76.866 28 -73 28L18 28Z"
                fill="#D9D9D9" />
        </g>
        <g id="Rectangle 29" filter="url(#filter1_d_0_1)">
            <path
                d="M752 32C755.866 32 759 35.134 759 39C759 42.866 755.866 46 752 46L198 46C194.134 46 191 42.866 191 39C191 35.134 194.134 32 198 32L752 32Z"
                fill="#D9D9D9" />
        </g>
        <g id="Traupakker">
            <g id="TraupakkerBakgrunn" filter="url(#filter2_d_0_1)">
                <path d="M4 0H218V71H4V0Z" fill="#D9D9D9" />
            </g>
            <g id="Trau">
                <g id="Rectangle 35" filter="url(#filter3_d_0_1)">
                    <rect x="50" y="41" width="21" height="34" transform="rotate(-90 50 41)"
                        fill="white" />
                </g>
                <g id="Ellipse 8" filter="url(#filter4_d_0_1)">
                    <ellipse cx="67" cy="25.9062" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 9" filter="url(#filter5_d_0_1)">
                    <ellipse cx="76.52" cy="25.9062" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 10" filter="url(#filter6_d_0_1)">
                    <ellipse cx="57.48" cy="35.0938" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 11" filter="url(#filter7_d_0_1)">
                    <ellipse cx="67" cy="35.0938" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 12" filter="url(#filter8_d_0_1)">
                    <ellipse cx="76.52" cy="35.0938" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 7" filter="url(#filter9_d_0_1)">
                    <ellipse cx="57.48" cy="25.9062" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
            </g>
            <g id="Flaske1" filter="url(#filter10_d_0_1)">
                <g id="Group 13">
                    <rect id="Rectangle 3" x="13" y="13.8485" width="9" height="15.1515"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 2" cx="16.2143" cy="13.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 3" cx="18.7858" cy="13.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <rect id="Rectangle 4" x="15.5715" y="9" width="3.85714" height="4.24242"
                        fill="#76E6FF" />
                    <g id="Group 5">
                        <ellipse id="Ellipse 2_2" cx="16.2143" cy="13.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <ellipse id="Ellipse 3_2" cx="18.7858" cy="13.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <rect id="Rectangle 4_2" x="15.5715" y="9" width="3.85714" height="4.24242"
                            fill="#76E6FF" />
                        <rect id="Rectangle 3_2" x="13" y="13.8485" width="9" height="15.1515"
                            fill="#E12121" />
                    </g>
                </g>
                <rect id="Rectangle 34" x="13" y="16" width="9" height="7" fill="#D9D9D9" />
            </g>
            <g id="Flaske2" filter="url(#filter11_d_0_1)">
                <g id="Group 13_2">
                    <rect id="Rectangle 3_3" x="13" y="40.8485" width="9" height="15.1515"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 2_3" cx="16.2143" cy="40.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 3_3" cx="18.7858" cy="40.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <rect id="Rectangle 4_3" x="15.5715" y="36" width="3.85714" height="4.24242"
                        fill="#76E6FF" />
                    <g id="Group 5_2">
                        <ellipse id="Ellipse 2_4" cx="16.2143" cy="40.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <ellipse id="Ellipse 3_4" cx="18.7858" cy="40.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <rect id="Rectangle 4_4" x="15.5715" y="36" width="3.85714" height="4.24242"
                            fill="#76E6FF" />
                        <rect id="Rectangle 3_4" x="13" y="40.8485" width="9" height="15.1515"
                            fill="#E12121" />
                    </g>
                </g>
                <rect id="Rectangle 34_2" x="13" y="43" width="9" height="7" fill="#D9D9D9" />
            </g>
            <rect id="TraupakkerFramgrunn" x="45" width="98" height="71" fill="#7A7A7A" />
        </g>
    </g>
    <defs>
        <filter id="filter0_d_0_1" x="-84" y="28" width="380" height="188"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter1_d_0_1" x="187" y="32" width="576" height="22"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter2_d_0_1" x="0" y="0" width="222" height="79" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter3_d_0_1" x="46" y="20" width="42" height="29" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter4_d_0_1" x="58.24" y="21.3125" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter5_d_0_1" x="67.76" y="21.3125" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter6_d_0_1" x="48.72" y="30.5" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter7_d_0_1" x="58.24" y="30.5" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter8_d_0_1" x="67.76" y="30.5" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter9_d_0_1" x="48.72" y="21.3125" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter10_d_0_1" x="9" y="9" width="17" height="28" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter11_d_0_1" x="9" y="36" width="17" height="28" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
    </defs>
</svg>
      );
    } 


  const bladeXMovement = `spin 3s linear infinite`;

  return (
    <svg width="222" height="79" viewBox="0 0 222 79" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="222" height="79" fill="#F5F5F5" />
    <g id="Multilinje canvas">
        <rect x="-832" y="-99" width="1920.72" height="800.748" rx="2" fill="white" />
        <rect x="-831.5" y="-98.5" width="1919.72" height="799.748" rx="1.5" stroke="black"
            strokeOpacity="0.1" />
        <g id="Group 16" filter="url(#filter0_d_0_1)">
            <path id="Rectangle 26"
                d="M18 28C21.866 28 25 31.134 25 35C25 38.866 21.866 42 18 42L-73 42C-76.866 42 -80 38.866 -80 35C-80 31.134 -76.866 28 -73 28L18 28Z"
                fill="#D9D9D9" />
        </g>
        <g id="Rectangle 29" filter="url(#filter1_d_0_1)">
            <path
                d="M752 32C755.866 32 759 35.134 759 39C759 42.866 755.866 46 752 46L198 46C194.134 46 191 42.866 191 39C191 35.134 194.134 32 198 32L752 32Z"
                fill="#D9D9D9" />
        </g>
        <g id="Traupakker">
            <g id="TraupakkerBakgrunn" filter="url(#filter2_d_0_1)">
                <path d="M4 0H218V71H4V0Z" fill="#D9D9D9" />
            </g>
            <symbol id="Trau">
                <g id="Rectangle 35" filter="url(#filter3_d_0_1)">
                    <rect x="50" y="41" width="21" height="34" transform="rotate(-90 50 41)"
                        fill="white" />
                </g>
                <g id="Ellipse 8" filter="url(#filter4_d_0_1)">
                    <ellipse cx="67" cy="25.9062" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 9" filter="url(#filter5_d_0_1)">
                    <ellipse cx="76.52" cy="25.9062" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 10" filter="url(#filter6_d_0_1)">
                    <ellipse cx="57.48" cy="35.0938" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 11" filter="url(#filter7_d_0_1)">
                    <ellipse cx="67" cy="35.0938" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 12" filter="url(#filter8_d_0_1)">
                    <ellipse cx="76.52" cy="35.0938" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
                <g id="Ellipse 7" filter="url(#filter9_d_0_1)">
                    <ellipse cx="57.48" cy="25.9062" rx="4.76" ry="4.59375" fill="#76E6FF" />
                </g>
            </symbol>
            <symbol id="Flaske1" filter="url(#filter10_d_0_1)">
                <g id="Group 13">
                    <rect id="Rectangle 3" x="13" y="13.8485" width="9" height="15.1515"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 2" cx="16.2143" cy="13.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 3" cx="18.7858" cy="13.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <rect id="Rectangle 4" x="15.5715" y="9" width="3.85714" height="4.24242"
                        fill="#76E6FF" />
                    <g id="Group 5">
                        <ellipse id="Ellipse 2_2" cx="16.2143" cy="13.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <ellipse id="Ellipse 3_2" cx="18.7858" cy="13.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <rect id="Rectangle 4_2" x="15.5715" y="9" width="3.85714" height="4.24242"
                            fill="#76E6FF" />
                        <rect id="Rectangle 3_2" x="13" y="13.8485" width="9" height="15.1515"
                            fill="#E12121" />
                    </g>
                </g>
                <rect id="Rectangle 34" x="13" y="16" width="9" height="7" fill="#D9D9D9" />
            </symbol>
            <symbol id="Flaske2" filter="url(#filter11_d_0_1)">
                <g id="Group 13_2">
                    <rect id="Rectangle 3_3" x="13" y="40.8485" width="9" height="15.1515"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 2_3" cx="16.2143" cy="40.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <ellipse id="Ellipse 3_3" cx="18.7858" cy="40.8485" rx="3.21429" ry="3.0303"
                        fill="#76E6FF" />
                    <rect id="Rectangle 4_3" x="15.5715" y="36" width="3.85714" height="4.24242"
                        fill="#76E6FF" />
                    <g id="Group 5_2">
                        <ellipse id="Ellipse 2_4" cx="16.2143" cy="40.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <ellipse id="Ellipse 3_4" cx="18.7858" cy="40.8485" rx="3.21429" ry="3.0303"
                            fill="#76E6FF" />
                        <rect id="Rectangle 4_4" x="15.5715" y="36" width="3.85714" height="4.24242"
                            fill="#76E6FF" />
                        <rect id="Rectangle 3_4" x="13" y="40.8485" width="9" height="15.1515"
                            fill="#E12121" />
                    </g>
                </g>
                <rect id="Rectangle 34_2" x="13" y="43" width="9" height="7" fill="#D9D9D9" />
            </symbol>
            <g className={styles.blade} style={{ animation: bladeXMovement }}>
          <use id="Flaske1" href="#Flaske1" x="0" y="0" />
          <use id="Flaske2" href="#Flaske2" x="0" y="0" />
          <use id="Trau" href="#Trau" x="" y="0" transform="translate(50, 0)" />
        </g>
        </g>
        <rect id="TraupakkerFramgrunn" x="45" width="98" height="71" fill="#7A7A7A" />
    </g>
    <defs>
        <filter id="filter0_d_0_1" x="-84" y="28" width="380" height="188"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter1_d_0_1" x="187" y="32" width="576" height="22"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter2_d_0_1" x="0" y="0" width="222" height="79" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter3_d_0_1" x="46" y="20" width="42" height="29" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter4_d_0_1" x="58.24" y="21.3125" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter5_d_0_1" x="67.76" y="21.3125" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter6_d_0_1" x="48.72" y="30.5" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter7_d_0_1" x="58.24" y="30.5" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter8_d_0_1" x="67.76" y="30.5" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter9_d_0_1" x="48.72" y="21.3125" width="17.52" height="17.1875"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter10_d_0_1" x="9" y="9" width="17" height="28" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <filter id="filter11_d_0_1" x="9" y="36" width="17" height="28" filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
    </defs>
</svg>
  );
};

export const trauPakkerItem: CanvasElementItem = {
  id: 'trauPakker',
  name: 'Traupakker',
  description: 'SMI Traupakker',

  display: TrauPakkerDisplay,

  defaultSize: {
    width: 100,
    height: 155,
  },

  getNewOptions: (options) => ({
    ...options,
    background: {
      color: {
        fixed: 'transparent',
      },
    },
    placement: {
      width: options?.placement?.width ?? 100,
      height: options?.placement?.height ?? 155,
      top: options?.placement?.top,
      left: options?.placement?.left,
    },
  }),

  // Called when data changes
  prepareData: (ctx: DimensionContext, cfg: TrauPakkerConfig) => {
    const data: TrauPakkerData = {
      state: cfg?.state ? ctx.getScalar(cfg.state).value() : 0,
    };

    return data;
  },

  registerOptionsUI: (builder) => {
    const category = ['Wind Turbine'];
    builder.addCustomEditor({
      category,
      id: 'state',
      path: 'config.state',
      name: 'STATE',
      editor: ScalarDimensionEditor,
    });
  },
};

const getStyles = (theme: GrafanaTheme2) => ({
    blade: css({
      transformOrigin: '94.663px 94.663px',
      '@keyframes spin': {
        from: {
          transform: 'translate(0, 0)',
        },
        to: {
          transform: 'translate(50px, 0)',
        },
      },
    }),
  });
