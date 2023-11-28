import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';

import { CanvasElementItem, CanvasElementProps } from '../element';

interface KronesLabelData {
    state?: number;
}

interface KronesLabelConfig {
    state?: ScalarDimensionConfig;
}

const KronesLabelDisplay = ({ data }: CanvasElementProps<KronesLabelConfig, KronesLabelData>) => {
    const styles = useStyles2(getStyles);

    if (data?.state === 0) {
        //Return SVG for state 0
        return (
            <svg width="139" height="130" viewBox="0 0 139 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Labelling" filter="url(#filter0_d_48_305)">
                    <ellipse cx="69.5" cy="61" rx="65.5" ry="61" fill="#D9D9D9" />
                </g>
                <defs>
                    <filter id="filter0_d_48_305" x="0" y="0" width="139" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_305" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_305" result="shape" />
                    </filter>
                </defs>
            </svg>
        );
    }

    const bottleMovement = `spinLabel 3s linear infinite`;

    return (
        <svg width="139" height="130" viewBox="0 0 139 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Labelling">
                <g id="LabellingBG" filter="url(#filter0_d_57_47)">
                    <ellipse cx="69.5" cy="61" rx="65.5" ry="61" fill="#B2EEC2" />
                </g>
                <symbol id="FlaskeLabel2">
                    <rect id="Rectangle 3" x="123.152" y="56" width="9" height="15.1515" transform="rotate(90 123.152 56)" fill="#76E6FF" />
                    <ellipse id="Ellipse 2" cx="123.152" cy="59.2143" rx="3.21429" ry="3.0303" transform="rotate(90 123.152 59.2143)" fill="#76E6FF" />
                    <ellipse id="Ellipse 3" cx="123.152" cy="61.7858" rx="3.21429" ry="3.0303" transform="rotate(90 123.152 61.7858)" fill="#76E6FF" />
                    <rect id="Rectangle 4" x="128" y="58.5714" width="3.85714" height="4.24242" transform="rotate(90 128 58.5714)" fill="#76E6FF" />
                    <g id="Group 5">
                        <ellipse id="Ellipse 2_2" cx="123.152" cy="59.2143" rx="3.21429" ry="3.0303" transform="rotate(90 123.152 59.2143)" fill="#76E6FF" />
                        <ellipse id="Ellipse 3_2" cx="123.152" cy="61.7858" rx="3.21429" ry="3.0303" transform="rotate(90 123.152 61.7858)" fill="#76E6FF" />
                        <rect id="Rectangle 4_2" x="128" y="58.5714" width="3.85714" height="4.24242" transform="rotate(90 128 58.5714)" fill="#76E6FF" />
                        <rect id="Rectangle 3_2" x="123.152" y="56" width="9" height="15.1515" transform="rotate(90 123.152 56)" fill="#E12121" />
                    </g>
                    <rect id="Rectangle 34" x="121" y="56" width="9" height="7" transform="rotate(90 121 56)" fill="#D9D9D9" />
                </symbol>
                <symbol id="FlaskeLabel4">
                    <rect id="Rectangle 3_3" x="72" y="112.152" width="9" height="15.1515" transform="rotate(-180 72 112.152)" fill="#76E6FF" />
                    <ellipse id="Ellipse 2_3" cx="68.7857" cy="112.152" rx="3.21429" ry="3.0303" transform="rotate(-180 68.7857 112.152)" fill="#76E6FF" />
                    <ellipse id="Ellipse 3_3" cx="66.2142" cy="112.152" rx="3.21429" ry="3.0303" transform="rotate(-180 66.2142 112.152)" fill="#76E6FF" />
                    <rect id="Rectangle 4_3" x="69.4285" y="117" width="3.85714" height="4.24242" transform="rotate(-180 69.4285 117)" fill="#76E6FF" />
                    <g id="Group 5_2">
                        <ellipse id="Ellipse 2_4" cx="68.7857" cy="112.152" rx="3.21429" ry="3.0303" transform="rotate(-180 68.7857 112.152)" fill="#76E6FF" />
                        <ellipse id="Ellipse 3_4" cx="66.2142" cy="112.152" rx="3.21429" ry="3.0303" transform="rotate(-180 66.2142 112.152)" fill="#76E6FF" />
                        <rect id="Rectangle 4_4" x="69.4285" y="117" width="3.85714" height="4.24242" transform="rotate(-180 69.4285 117)" fill="#76E6FF" />
                        <rect id="Rectangle 3_4" x="72" y="112.152" width="9" height="15.1515" transform="rotate(-180 72 112.152)" fill="#E12121" />
                    </g>
                    <rect id="Rectangle 34_2" x="72" y="110" width="9" height="7" transform="rotate(-180 72 110)" fill="#D9D9D9" />
                </symbol>
                <symbol id="FlaskeLabel3">
                    <rect id="Rectangle 3_5" x="13.8484" y="65" width="9" height="15.1515" transform="rotate(-90 13.8484 65)" fill="#76E6FF" />
                    <ellipse id="Ellipse 2_5" cx="13.8484" cy="61.7857" rx="3.21429" ry="3.0303" transform="rotate(-90 13.8484 61.7857)" fill="#76E6FF" />
                    <ellipse id="Ellipse 3_5" cx="13.8484" cy="59.2142" rx="3.21429" ry="3.0303" transform="rotate(-90 13.8484 59.2142)" fill="#76E6FF" />
                    <rect id="Rectangle 4_5" x="9" y="62.4286" width="3.85714" height="4.24242" transform="rotate(-90 9 62.4286)" fill="#76E6FF" />
                    <g id="Group 5_3">
                        <ellipse id="Ellipse 2_6" cx="13.8484" cy="61.7857" rx="3.21429" ry="3.0303" transform="rotate(-90 13.8484 61.7857)" fill="#76E6FF" />
                        <ellipse id="Ellipse 3_6" cx="13.8484" cy="59.2142" rx="3.21429" ry="3.0303" transform="rotate(-90 13.8484 59.2142)" fill="#76E6FF" />
                        <rect id="Rectangle 4_6" x="9" y="62.4286" width="3.85714" height="4.24242" transform="rotate(-90 9 62.4286)" fill="#76E6FF" />
                        <rect id="Rectangle 3_6" x="13.8484" y="65" width="9" height="15.1515" transform="rotate(-90 13.8484 65)" fill="#E12121" />
                    </g>
                    <rect id="Rectangle 34_3" x="16" y="65" width="9" height="7" transform="rotate(-90 16 65)" fill="#D9D9D9" />
                </symbol>
                <symbol id="FlaskeLabel1">
                    <rect id="Rectangle 3_7" x="63" y="11.8485" width="9" height="15.1515" fill="#76E6FF" />
                    <ellipse id="Ellipse 2_7" cx="66.2143" cy="11.8485" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                    <ellipse id="Ellipse 3_7" cx="68.7858" cy="11.8485" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                    <rect id="Rectangle 4_7" x="65.5715" y="7" width="3.85714" height="4.24242" fill="#76E6FF" />
                    <g id="Group 5_4">
                        <ellipse id="Ellipse 2_8" cx="66.2143" cy="11.8485" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                        <ellipse id="Ellipse 3_8" cx="68.7858" cy="11.8485" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                        <rect id="Rectangle 4_8" x="65.5715" y="7" width="3.85714" height="4.24242" fill="#76E6FF" />
                        <rect id="Rectangle 3_8" x="63" y="11.8485" width="9" height="15.1515" fill="#E12121" />
                    </g>
                    <rect id="Rectangle 34_4" x="63" y="14" width="9" height="7" fill="#D9D9D9" />
                </symbol>
                <g className={styles.blade} style={{ animation: bottleMovement }}>
                    <use id="FlaskeLabel1" href="#FlaskeLabel1" x="0" y="0" />
                    <use id="FlaskeLabel2" href="#FlaskeLabel2" x="0" y="0" />
                    <use id="FlaskeLabel3" href="#FlaskeLabel3" x="0" y="0" />
                    <use id="FlaskeLabel4" href="#FlaskeLabel4" x="0" y="0" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_57_47" x="0" y="0" width="139" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_47" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_47" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export const kronesLabelItem: CanvasElementItem = {
    id: 'kronesLabel',
    name: 'kronesLabel',
    description: 'Krones Labelling Machine',

    display: KronesLabelDisplay,

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
    prepareData: (ctx: DimensionContext, cfg: KronesLabelConfig) => {
        const data: KronesLabelData = {
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
        transformOrigin: '68px 61px',
        '@keyframes spinLabel': {
            from: {
                transform: 'rotate(0)',
            },
            to: {
                transform: 'rotate(360deg)',
            },
        },
    }),
});
