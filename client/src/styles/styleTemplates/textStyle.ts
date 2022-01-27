import { css } from 'styled-components';

/* Display */

export const DisplayRegular = css`
    font-weight: var(--normal-font-weight);
    font-size: var(--display-font-size);
    line-height: var(--display-font-size);
    color: var(--title-active-color);
`;

export const DisplayBold = css`
    ${DisplayRegular};
    font-weight: var(--bold-font-weight);
`;

/* Text */

export const Text = css`
    font-weight: var(--normal-font-weight);
`;
export const TextLarge = css`
    ${Text};
    font-size: var(--large-font-size);
    line-height: var(--large-font-line-height);
`;
export const TextMedium = css`
    ${Text};
    font-size: var(--medium-font-size);
    line-height: var(--medium-font-line-height);
`;
export const TextSmall = css`
    ${Text};
    font-size: var(--small-font-size);
    line-height: var(--small-font-line-height);
`;
export const TextXSmall = css`
    ${Text};
    font-size: var(--x-small-font-size);
    line-height: var(--x-small-font-line-height);
`;

/* Link */

export const LinkLarge = css`
    ${TextLarge};
    font-weight: var(--bold-font-weight);
`;
export const LinkMedium = css`
    ${TextMedium};
    font-weight: var(--bold-font-weight);
`;
export const LinkSmall = css`
    ${TextSmall};
    font-weight: var(--bold-font-weight);
`;
export const LinkXSmall = css`
    ${TextXSmall};
    font-weight: var(--bold-font-weight);
`;
