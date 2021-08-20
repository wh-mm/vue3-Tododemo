const LS = {
    /* 获取 */
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    /* 保存 */
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    /* 删除 */
    remove(key) {
        localStorage.removeItem(id);
    },
    /* 删除所有 */
    clear() {
        localStorage.clear();
    }
}

export default LS;
