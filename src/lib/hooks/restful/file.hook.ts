
// 上传资料附件
interface UploadFileProps {
    query: {
        id: string;
        kind?: string;
    };
    body: {
        image: File
    }
}
export const uploadFile = ({ query, body }: UploadFileProps) => {
    return {
        url: `${process.env.NEXT_PUBLIC_OPEN_URL}/upload-employee-photo`,
        method: "POST",
        params: query,
        data: body,
        headers: { "Content-Type": "multipart/form-data" },
    }
}
//下载文件
export const downFile = (path: string) => {
    window.open(`${process.env.NEXT_PUBLIC_OSS}/${path}`);
}