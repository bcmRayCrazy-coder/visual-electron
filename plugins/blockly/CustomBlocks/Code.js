/**
 * @author bcmray_crazy
 * @module CodeGenerator
 * @description 生成block的代码 
 */
class CodeGenerator {
    /**
     * @description 创建block代码生成器
     * @returns {CodeGenerator}
     */
    constructor() {
        this.code = '';
        this.upperCode = '';
        return this;
    }

    /**
     * @description 设置顶部代码
     * @param {string} code 代码
     * @returns {CodeGenerator}
     */
    setUpperCode(code) {
        this.upperCode = code;
        return this;
    }

    /**
     * @description 设置block代码
     * @param {string} code 代码
     * @returns {CodeGenerator}
     */
    setBlockCode(code) {
        this.code = code;
        return this;
    }

    /**
     * @description 获取顶部代码
     * @returns {string}
     */
    getUpperCode() {
        return this.upperCode;
    }

    /**
     * @description 获取block代码
     * @returns {string}
     */
    getBlockCode() {
        return this.code;
    }
}

export default { CodeGenerator };