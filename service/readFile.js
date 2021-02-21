import axios from 'axios'

export const readFile = (fileName, fileType, syncType) => {
    return axios
        .get(`/api/read-file`, {
            params: {
                fileName,
                fileType,
                syncType,
            },
        })
        .then((response) => response.data)
        .catch((error) => error)
}
