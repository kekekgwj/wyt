import pinyin from 'pinyin';

export const pinyinConverter = (ch) => {
    const eg = pinyin(ch,
        {
            style: pinyin.STYLE_NORMAL
        }
    );
    return eg.join('');
};
