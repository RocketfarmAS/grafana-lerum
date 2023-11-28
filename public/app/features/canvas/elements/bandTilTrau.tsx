import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { ScalarDimensionConfig } from '@grafana/schema';
import { useStyles2 } from '@grafana/ui';
import { DimensionContext } from 'app/features/dimensions';
import { ScalarDimensionEditor } from 'app/features/dimensions/editors';

import { CanvasElementItem, CanvasElementProps } from '../element';

interface BandTilTrauData {
    state?: number;
}

interface BandTilTrauConfig {
    state?: ScalarDimensionConfig;
}

const BandTilTrauDisplay = ({ data }: CanvasElementProps<BandTilTrauConfig, BandTilTrauData>) => {
    const styles = useStyles2(getStyles);

    if (data?.state === 0) {
        //Return SVG for state 0
        return (
            <svg width="380" height="188" viewBox="0 0 380 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="BandTilTrau" filter="url(#filter0_d_48_256)">
                    <path id="Rectangle 28" d="M4 7C4 3.134 7.13401 0 11 0C14.866 0 18 3.13401 18 7V173C18 176.866 14.866 180 11 180C7.13401 180 4 176.866 4 173V7Z" fill="#D9D9D9" />
                    <path id="Rectangle 20" d="M369 166C372.866 166 376 169.134 376 173C376 176.866 372.866 180 369 180L14 180C10.134 180 7 176.866 7 173C7 169.134 10.134 166 14 166L369 166Z" fill="#D9D9D9" />
                    <path id="Rectangle 26" d="M102 0C105.866 0 109 3.13401 109 7C109 10.866 105.866 14 102 14L11 14C7.13401 14 4 10.866 4 7C4 3.13401 7.13401 0 11 0L102 0Z" fill="#D9D9D9" />
                </g>
                <defs>
                    <filter id="filter0_d_48_256" x="0" y="0" width="380" height="188" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_256" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_256" result="shape" />
                    </filter>
                </defs>
            </svg>
        );
    }


    const bladeHMovement = `spinH 3s linear infinite`;
    const bladeVMovement = `spinV 3s linear infinite`;

    return (
        <svg width="380" height="188" viewBox="0 0 380 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="BandTilTrau" filter="url(#filter0_d_57_13)">
                <path id="Rectangle 28" d="M4 7C4 3.134 7.13401 0 11 0C14.866 0 18 3.13401 18 7V173C18 176.866 14.866 180 11 180C7.13401 180 4 176.866 4 173V7Z" fill="#B2EEC2" />
                <path id="Rectangle 20" d="M369 166C372.866 166 376 169.134 376 173C376 176.866 372.866 180 369 180L14 180C10.134 180 7 176.866 7 173C7 169.134 10.134 166 14 166L369 166Z" fill="#B2EEC2" />
                <path id="Rectangle 26" d="M102 0C105.866 0 109 3.13401 109 7C109 10.866 105.866 14 102 14L11 14C7.13401 14 4 10.866 4 7C4 3.13401 7.13401 0 11 0L102 0Z" fill="#B2EEC2" />
                <symbol id="FlaskeTrauV">
                    <rect id="Rectangle 3" x="7" y="148.848" width="9" height="15.1515" fill="#76E6FF" />
                    <ellipse id="Ellipse 2" cx="10.2143" cy="148.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                    <ellipse id="Ellipse 3" cx="12.7858" cy="148.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                    <rect id="Rectangle 4" x="9.57153" y="144" width="3.85714" height="4.24242" fill="#76E6FF" />
                    <g id="Group 5">
                        <ellipse id="Ellipse 2_2" cx="10.2143" cy="148.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                        <ellipse id="Ellipse 3_2" cx="12.7858" cy="148.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                        <rect id="Rectangle 4_2" x="9.57153" y="144" width="3.85714" height="4.24242" fill="#76E6FF" />
                        <rect id="Rectangle 3_2" x="7" y="148.848" width="9" height="15.1515" fill="#E12121" />
                    </g>
                    <rect id="Rectangle 34" x="7" y="151" width="9" height="7" fill="#D9D9D9" />
                </symbol>
                <symbol id="FlaskeTrauH">
                    <rect id="Rectangle 3_3" x="275" y="160.848" width="9" height="15.1515" fill="#76E6FF" />
                    <ellipse id="Ellipse 2_3" cx="278.214" cy="160.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                    <ellipse id="Ellipse 3_3" cx="280.786" cy="160.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                    <rect id="Rectangle 4_3" x="277.572" y="156" width="3.85714" height="4.24242" fill="#76E6FF" />
                    <g id="Group 5_2">
                        <ellipse id="Ellipse 2_4" cx="278.214" cy="160.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                        <ellipse id="Ellipse 3_4" cx="280.786" cy="160.848" rx="3.21429" ry="3.0303" fill="#76E6FF" />
                        <rect id="Rectangle 4_4" x="277.572" y="156" width="3.85714" height="4.24242" fill="#76E6FF" />
                        <rect id="Rectangle 3_4" x="275" y="160.848" width="9" height="15.1515" fill="#E12121" />
                    </g>
                    <rect id="Rectangle 34_2" x="275" y="163" width="9" height="7" fill="#D9D9D9" />
                </symbol>
                <g className={styles.flaske_h} style={{ animation: bladeHMovement }}>
                    <use id="FlaskeTrauH" href="#FlaskeTrauH" x="0" y="0" />
                </g>
                <g className={styles.flaske_v} style={{ animation: bladeVMovement }}>
                    <use id="FlaskeTrauV" href="#FlaskeTrauV" x="0" y="0" />
                </g>
                </g>
                <defs>
                    <filter id="filter0_d_57_13" x="0" y="0" width="380" height="188" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_13" result="shape" />
                    </filter>
                </defs>
        </svg>

    );
};

export const bandTilTrauItem: CanvasElementItem = {
    id: 'bandTilTrau',
    name: 'bandTilTrau',
    description: 'SMI Banestyring til Traupakker',

    display: BandTilTrauDisplay,

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
    prepareData: (ctx: DimensionContext, cfg: BandTilTrauConfig) => {
        const data: BandTilTrauData = {
            state: cfg?.state ? ctx.getScalar(cfg.state).value() : 0,
        };

        return data;
    },

    registerOptionsUI: (builder) => {
        const category = ['Band til Trau'];
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
    flaske_h: css({
        transformOrigin: '94.663px 94.663px',
        '@keyframes spinH': {
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(-150px, 0)',
            },
        },
    }),
    flaske_v: css({
        transformOrigin: '0px 0px',
        '@keyframes spinV': {
            from: {
                transform: 'translate(0, 0)',
            },
            to: {
                transform: 'translate(0, -150px)',
            },
        },
    }),
});
