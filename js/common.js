/**
 * 本地导入excel转为数组
 * @param file 
 * @returns 
 */
const importExport = (file) => new Promise((resolve, reject) => {
    const { files } = file.target
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
        try {
            const { result } = event.target
            const workbook = XLSX.read(result, { type: 'binary' })
            let data = [] // 存储获取到的数据
            // 遍历每张工作表进行读取（这里默认只读取第一张表）
            for (const sheet in workbook.Sheets) {
                if (Object.prototype.hasOwnProperty.call(workbook.Sheets, sheet)) { 
                    // 利用 sheet_to_json 方法将 excel 转成 json 数据
                    data = data.concat(
                        XLSX.utils.sheet_to_json(workbook.Sheets[sheet]),
                    )
                    // break; // 如果只取第一张表，就取消注释这行
                }
            }
            resolve(data)
        } catch (e) {
            reject(e)
        }
    }
    fileReader.readAsBinaryString(files[0])
})


function readFile (file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = ev => {
             resolve(ev.target.result)
        }
    })
}

// 字段对应表
const character = {
    product_name: {
        text: '产品名称',
        type: 'string'
    },
    price: {
        text: '零售价格',
        type: 'string'
    },
}
