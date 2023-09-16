import { useMemo, useState } from "react"
import type { PaginationProps } from "antd"
import { TablePaginationConfig } from "antd";
interface PaginationAntd {
    current: number;
    pageSize: number;
}
interface PaginationNode {
    take: number;
    skip: number;
}
interface UsePaginationProps extends Omit<PaginationProps, 'onChange'> {
    defaultPageSize?: number
}
export default function usePagination({ defaultPageSize = 10, ...exta }: UsePaginationProps) {
    const initPage = 1
    const [pagination, setPagination] = useState<PaginationAntd>({
        current: initPage,
        pageSize: defaultPageSize || 10,
    });
    const tableProps = (total?: number): TablePaginationConfig => ({
        ...pagination,
        total: total || 0,
        ...exta,
        onChange: (current: number, pageSize: number) => {
            setPagination({
                current: current || initPage,
                pageSize: pageSize || defaultPageSize || 20
            })
        },
        onShowSizeChange: (current: number, pageSize: number) => {
            setPagination({
                current: current || initPage,
                pageSize: pageSize || defaultPageSize || 20
            })
        }

    })
    function gotoPage(current: number) {
        setPagination((pagination) => ({ ...pagination, current }))
    }
    const pageParams: PaginationNode = useMemo(() => ({
        take: pagination.pageSize,
        skip: pagination.current > 1 ? (pagination.current - 1) * pagination.pageSize : 0,
    }), [pagination])
    return { pageParams, gotoPage, tableProps }
}