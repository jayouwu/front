import React, { useState, useRef } from "react";
import { Button, Tag, Popover } from 'antd';
import ProTable from '@ant-design/pro-table';
import { QueryFilter, } from '@ant-design/pro-form';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";

/** 定制table列表
 * 
 * @param {Array} toolBar 工具栏按钮：如添加、导出，须带图标
 *      如： toolBar={
          [
            <Button type="primary" key="buttonAdd" onClick={() => showDrawer()}> 添加设备 </Button>,
            <Button type="primary" key="buttonXf" onClick={() => navigate('/device/batchIssued')}> 批量下发人员 </Button>
          ]
        }
 * @param {Array} queryFilter 更多搜索表单配置
 *      如： queryFilter={
          [
            <ProFormText name="desc" key="desc" label="创建人" />,
            <ProFormText name="status" key="status" label="更新人" />
          ]
        }
 * 
 * @param {String} searchPlaceholder 搜索提示
 */

const ProTableCustom = (props) => {
  const formRef = useRef()
  const { t } = useTranslation()
  const [formSearchParams, setFormSearchParams] = useState({})
  const [initSearchColumn, setInitSearchColumn] = useState('searchParams')

  const [showFilter, setShowFilter] = useState(false)
  const [searchVisible, setSearchVisible] = useState(true)
  const formRef2 = useRef()
  const [condition, setCondition] = useState([])
  const { columns, toolBar, queryFilter, actionRef, searchPlaceholder} = props

  return (
    <>
      <ProTable
        {...props}
        formRef={formRef}
        params={formSearchParams}
        search={false}
        pagination={{
          size: 'default',
          pageSize: 10,
          showSizeChanger: true
        }}
        className={`zk-pro-table-custom ${!!queryFilter && 'has-query-filter'}`}
        toolBarRender={() => [
          <>
            { !!queryFilter && !!queryFilter.length && 
              <div className="query-filter">
                <Popover placement="bottom" content={
                  <QueryFilter
                    submitter={false}
                    span={24}
                    labelWidth="auto"
                    split
                    formRef={formRef2}
                    style={{paddingTop: '20px'}}
                  >
                    {!!queryFilter.length && queryFilter.map(item => {return item})}
                  </QueryFilter>
                } trigger="click">
                  <Button 
                    type="link"
                    onClick={() => {
                      setShowFilter(!showFilter);
                      setSearchVisible(!searchVisible)
                    }}
                  >
                    高级筛选 {showFilter ? <UpOutlined /> : <DownOutlined />}
                  </Button>
                </Popover>
                <Button 
                  type="text"
                  onClick={() => {
                    setSearchVisible(true);
                    setCondition([])
                    formRef2?.current?.resetFields()
                    actionRef?.current?.reset()
                    actionRef?.current?.reload()
                  }}
                >
                  清空
                </Button>
              </div>
            }
          </>,
          <>
            {!!toolBar.length && toolBar.map(item => {return item})}
          </>
        ]}
        beforeSearchSubmit={(params)=>{
          console.log('beforeSearchSubmit',params)
        }}
        onSubmit={(params)=>{
          console.log('onSubmit',params)
        }}
        options={{setting:false,density:false,search:{
          name:initSearchColumn,
          style:{width:'280px'},
          allowClear:true,
          enterButton: <Button type="primary"> 搜索 </Button>,
          placeholder: searchPlaceholder || t('common.searchPlaceholder'),
          multiple:true,
          onSearch : (keyword) => {
            let searchJson = formRef2?.current?.getFieldFormatValue() || {}
            setFormSearchParams(searchJson)
            searchJson[initSearchColumn] = keyword;
            let params = []
            for(let key in searchJson) {
              for(let index in columns) {
                let info = columns[index];
                if(info.dataIndex === key && searchJson[key] !== '') {
                  params.push({'name':key,'title':info.title,'value':searchJson[key]})
                }
              }
            }
            setCondition(params)
            setSearchVisible(true)
            
            // 查询的时候的回到第一页
            actionRef?.current?.setPageInfo?.({
              current: 1,
            }); 
          }
        }}}
        toolbar={{
          multipleLine: true,
          filter: (
            <>
              { condition?.length > 0 && <>
                <span style={{'marginRight':'10px'}}> 查询条件: </span>
                  {condition?.map((item) => {
                    return (
                      <Tag key={item.name}>{item.title}({item.value})</Tag>
                    )
                  })}
                </>
              }
            </>
          )
        }}
      />
    </>
  )
}

export default ProTableCustom;
