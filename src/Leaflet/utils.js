/**
 *
 * @returns {string}
 */

export const idGenerator = () => {
    return `_ ${Math.random()
        .toString(36)
        .substr(2, 9)}`;
};
