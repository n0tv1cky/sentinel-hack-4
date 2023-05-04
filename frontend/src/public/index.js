
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	MacBookPro141_Vector1: tryRequire('./MacBookPro141_Vector1.png') || require('./questionMark.png'),
	MacBookPro141_text0: tryRequire('./MacBookPro141_text0.png') || require('./questionMark.png'),
	MacBookPro141_text1: tryRequire('./MacBookPro141_text1.png') || require('./questionMark.png'),
	MacBookPro141_Vector: tryRequire('./MacBookPro141_Vector.png') || require('./questionMark.png'),
	MacBookPro141_Vector_1: tryRequire('./MacBookPro141_Vector_1.png') || require('./questionMark.png'),
	MacBookPro141_text0_1: tryRequire('./MacBookPro141_text0_1.png') || require('./questionMark.png'),
	MacBookPro141_text1_1: tryRequire('./MacBookPro141_text1_1.png') || require('./questionMark.png'),
	MacBookPro141_Vector_2: tryRequire('./MacBookPro141_Vector_2.png') || require('./questionMark.png'),
	MacBookPro141_Vector_3: tryRequire('./MacBookPro141_Vector_3.png') || require('./questionMark.png'),
}