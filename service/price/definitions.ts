/**
 * 新增【sku参与活动】的参数
 */
export class ActivitySkuAddDTO {
  public _cidList?: number[]
  public _deptIdList?: string[]
  public _salerErp?: string[]
  /**
   * 活动id
   */
  public activityId: number
  /**
   * 活动URL，绝对路径
   */
  public activityUrl: string
  /**
   * 活动结束时间
   */
  public endTime: string
  /**
   * 商品id
   */
  public skuId: number
  /**
   * 活动开始时间
   */
  public startTime: string
}
/**
 * 【sku参与活动】列表展示对象
 */
export class ActivitySkuListVO {
  /**
   * 活动id
   */
  public activityId?: number
  /**
   * 活动URL，绝对路径
   */
  public activityUrl?: string
  /**
   * 活动结束时间
   */
  public endTime?: string
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 商品id
   */
  public skuId?: number
  /**
   * 活动开始时间
   */
  public startTime?: string
}
/**
 * 【sku参与活动】详情展示对象
 */
export class ActivitySkuShowVO {
  /**
   * 活动id
   */
  public activityId?: number
  /**
   * 活动URL，绝对路径
   */
  public activityUrl?: string
  /**
   * 活动结束时间
   */
  public endTime?: string
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 商品id
   */
  public skuId?: number
  /**
   * 活动开始时间
   */
  public startTime?: string
}
/**
 * 修改【sku参与活动】的参数
 */
export class ActivitySkuUpdateDTO {
  public _cidList?: number[]
  public _deptIdList?: string[]
  public _salerErp?: string[]
  /**
   * 活动id
   */
  public activityId: number
  /**
   * 活动URL，绝对路径
   */
  public activityUrl: string
  /**
   * 活动结束时间
   */
  public endTime: string
  /**
   * 主键ID
   */
  public id: number
  /**
   * 商品id
   */
  public skuId: number
  /**
   * 活动开始时间
   */
  public startTime: string
}
/**
 * 审批流明细-部门跟价规则展示对象
 */
export class AuditFlowDeptFollowRuleDetailVO {
  /**
   * 指定band设置方式，0固定band 1自定义band
   */
  public bandMode?: number
  /**
   * band类型，sales销量band；gmv销售额band；pv点击band
   */
  public bandType?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 审批流主键id
   */
  public id?: number
  /**
   * 规则名称
   */
  public ruleName?: string
  /**
   * 能否显示审批、拒绝按钮;true显示
   */
  public showApprovalBtn?: boolean
  public auditDetails: AuditItemVO[]
  public followRuleCategoryList: FollowRuleCategoryVO[]
  public followRuleItemList: FollowRuleItem[]
  public oppList: OpponentVO[]
}
/**
 * 【规则审批流】列表展示页面对象
 */
export class AuditFlowListVO {
  /**
   * 规则状态
   */
  public auditStatus?: string
  /**
   * 二级品类
   */
  public cid2Name?: string
  /**
   * 三级品类
   */
  public cid3Name?: string
  /**
   * 创建人
   */
  public createdBy?: string
  /**
   * 创建时间
   */
  public createdTime?: string
  /**
   * 部门
   */
  public deptName?: string
  /**
   * 审批流主键id
   */
  public id?: number
  /**
   * 更新时间
   */
  public operatedTime?: string
  /**
   * 规则名称
   */
  public ruleName?: string
  /**
   * 审批类型 1部门品类跟价规则，2sku跟价规则;查看明细时根据类型调用不同接口
   */
  public type?: number
}
export class AuditItemVO {
  /**
   * 审批人ERP
   */
  public auditErp?: string
  /**
   * 审批状态：1待审批 2驳回 3通过 4撤销 5其他人通过 6其他人驳回
   */
  public auditStatus?: string
  /**
   * 创建时间
   */
  public createdTime?: string
  /**
   * 更新时间
   */
  public operatedTime?: string
}
/**
 * 【黑名单】列表展示对象
 */
export class BlackListVO {
  /**
   * 创建人
   */
  public addBlacklistBy?: string
  /**
   * 创建时间
   */
  public addBlacklistTime?: string
  /**
   * 品牌
   */
  public brandName?: string
  /**
   * 品类
   */
  public categoryName?: string
  /**
   * 部门
   */
  public deptName?: string
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * sku id
   */
  public skuId?: number
  /**
   * sku名称
   */
  public skuName?: string
}
/**
 * 提交审批、保存部门跟价规则参数实体
 */
export class DeptFollowRuleAddUpdateDTO {
  public _cidList?: number[]
  public _deptIdList?: string[]
  public _salerErp?: string[]
  /**
   * 指定band设置方式，0固定band 1自定义band
   */
  public bandMode?: number
  /**
   * band类型，sales销量band；gmv销售额band；pv点击band
   */
  public bandType?: string
  /**
   * 规则设置的品类id
   */
  public cidList?: number[]
  /**
   * 规则头表id
   */
  public headerId?: number
  /**
   * 规则设置的品类层级:0-一级品类，1-二级品类，2-三级品类;仅能选择2级和3级
   */
  public level?: number
  public followRuleItemList: FollowRuleItem[]
}
/**
 * 【部门品类跟价规则】编辑查看展示对象
 */
export class DeptFollowRuleEditVO {
  /**
   * 审批人字符串（提交状态的会展示该字段）
   */
  public auditErps?: string
  /**
   * 审批流程id
   */
  public auditId?: number
  /**
   * 审批状态:0未提交 1待审批 2驳回 3通过 4撤销
   */
  public auditStatus?: number
  /**
   * 审批状态:0未提交 1待审批 2驳回 3通过 4撤销
   */
  public auditStatusName?: string
  /**
   * 指定band设置方式，0固定band 1自定义band
   */
  public bandMode?: number
  /**
   * band类型，sales销量band；gmv销售额band；pv点击band
   */
  public bandType?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 规则头表id
   */
  public headerId?: number
  /**
   * 规则名称
   */
  public ruleName?: string
  /**
   * 是否显示'撤销审批'按钮，true显示
   */
  public showCancelBtn?: boolean
  /**
   * 是否显示'保存规则'按钮，true显示
   */
  public showSaveBtn?: boolean
  /**
   * 是否显示'提交审批'按钮，true显示
   */
  public showSubmitBtn?: boolean
  public followRuleCategoryList: FollowRuleCategoryVO[]
  public followRuleItemList: FollowRuleItem[]
  public oppList: OpponentVO[]
}
/**
 * 【部门品类跟价规则】列表展示对象
 */
export class DeptFollowRuleListVO {
  /**
   * 审批状态
   */
  public auditStatusDesc?: string
  /**
   * 二级品类名称
   */
  public cidName2?: string
  /**
   * 三级品类名称
   */
  public cidName3?: string
  /**
   * 创建时间
   */
  public createdTime?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 规则头表
   */
  public headerId?: number
  /**
   * 是否可编辑 true可以
   */
  public operateFlag?: boolean
  /**
   * 最近操作人
   */
  public operatedBy?: string
  /**
   * 修改时间
   */
  public operatedTime?: string
  /**
   * 规则名称
   */
  public ruleName?: string
  /**
   * 生效的规则头表
   */
  public validHeaderId?: number
}
export class FollowDegreeParam {
  /**
   * 跟价对象(OPP_page_price:友商页面价,OPP_trans_price:友商成交价)
   */
  public followObj?: string
  /**
   * 运算符:+:加，*:乘
   */
  public symbol?: string
  /**
   * 计算值:选择乘以，后面输入框为（）%，可填写50%-150%范围(存储整数部分，去掉百分号)；选择加，后面输入框为（）元，可填写-20~20范围
   */
  public value?: number
}
/**
 * 【跟价池】列表展示对象
 */
export class FollowPoolListVO {
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * 最新建议价格
   */
  public dpPrice?: number
  /**
   * 最新计算时间
   */
  public dpTime?: string
  /**
   * 京东价
   */
  public erpPrice?: number
  /**
   * 说明
   */
  public explainInfo?: string
  /**
   * 赠品促销的数量
   */
  public giftPromCount?: number
  /**
   * 销售额BAND
   */
  public gmvBand?: string
  /**
   * 毛利率，页面直接展示+%即可
   */
  public gpRate?: number
  /**
   * 自动发布价格开关是否打开:1打开
   */
  public isAutoPub?: number
  /**
   * 最近调价时间，页面使用
   */
  public lastPubTime?: string
  /**
   * 友商最低价格平台名
   */
  public lowestOppName?: string
  /**
   * 友商最低价
   */
  public lowestOppSkuPrice?: number
  /**
   * 友商最低价URL
   */
  public lowestOppSkuUrl?: string
  /**
   * 套装促销的数量
   */
  public packPromCount?: number
  /**
   * 最新价格计算结果id,通过价格时用
   */
  public prId?: number
  /**
   * 促销统计数，大于0的时候展示‘查看促销’功能
   */
  public promCount?: number
  /**
   * 进货价
   */
  public purchasePrice?: number
  /**
   * 真实成本
   */
  public realCost?: number
  /**
   * 页面价
   */
  public redPrice?: number
  /**
   * 是否显示'通过、拒绝'按钮，true显示
   */
  public showApprovalRejectBtn?: boolean
  /**
   * 单品促销的数量
   */
  public singlePromCount?: number
  /**
   * sku id
   */
  public skuId?: number
  /**
   * sku名称
   */
  public skuName?: string
  /**
   * 状态
   */
  public statusInfo?: string
  /**
   * 库存
   */
  public stock?: number
  /**
   * 总价促销的数量
   */
  public sumPromCount?: number
  /**
   * 封顶促销的数量
   */
  public topPromCount?: number
}
/**
 * 【部门品类跟价规则-设置品类】编辑查看展示对象
 */
export class FollowRuleCategoryVO {
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 一级品类名
   */
  public cname1?: string
  /**
   * 二级品类名
   */
  public cname2?: string
  /**
   * 三级品类名
   */
  public cname3?: string
}
/**
 * 跟价规则片对象
 */
export class FollowRuleItem {
  /**
   * 固定band值列表
   */
  public fixedBand?: string
  /**
   * 自定义band最低值
   */
  public floorBand?: number
  /**
   * 跟价友商id列表
   */
  public oppIds?: number[]
  /**
   * 自定义band最高值
   */
  public upperBand?: number
  public followDegreeParam: FollowDegreeParam
  public otherParam: OtherParam
  public riskParam: RiskParam
}
/**
 * 手动调价参数定义
 */
export class ManualAdjustPriceAddDTO {
  public _cidList?: number[]
  public _deptIdList?: string[]
  public _salerErp?: string[]
  /**
   * 可维持天数
   */
  public keepDay?: number
  /**
   * 调价价格
   */
  public price: number
  /**
   * 调用场景 1比价详情，2价格模拟
   */
  public scene: number
  /**
   * 商品id
   */
  public skuId: number
}
/**
 * 友商信息实体类
 */
export class OpponentVO {
  /**
   * 友商平台id
   */
  public oppoId?: number
  /**
   * 友商平台name
   */
  public oppoName?: string
  /**
   * 友商平台url
   */
  public url?: string
}
export class OtherParam {
  /**
   * 调价金额不超过X元
   */
  public adjustAmountLimit?: number
  /**
   * 超过调价幅度，不跟价:下调幅度X%
   */
  public adjustLowerLimit?: number
  /**
   * 超过调价幅度，不跟价:上调幅度X%
   */
  public adjustUpperLimit?: number
  /**
   * 超过调价幅度，不跟价:true不跟价时adjustLowerLimit和adjustUpperLimit参数不允许为空
   */
  public exceedAdjustRangeNotFollow?: boolean
  /**
   * 未来有特殊促销时，不跟价:前X天不跟价
   */
  public futureNotFollowDay?: number
  /**
   * 未来有特殊促销时，不跟价:true时不跟价
   */
  public futureSpecialPromoNotFollow?: boolean
  /**
   * 未来有特殊促销时，不跟价的促销类型:sum-总价促销,seckill-秒杀促销,flash-闪购促销
   */
  public futureSpecialPromoTypeList?: string[]
  /**
   * 特殊促销时，不跟价:true时不跟价
   */
  public inSpecialPromoNotFollow?: boolean
  /**
   * 特殊促销时，不跟价的促销类型:sum-总价促销,seckill-秒杀促销,flash-闪购促销
   */
  public inSpecialPromoTypeList?: string[]
  /**
   * 京东库存天数小于X天时，不跟价:true不跟价jdSafeStockDay必填
   */
  public jdOutSafeStockNotFollow?: boolean
  /**
   * 京东安全库存天数(jdOutSafeStockNotFollow为true时必填)
   */
  public jdSafeStockDay?: number
  /**
   * 调价金额不超过X元：true不超过阀值adjustAmountLimit必填
   */
  public notExceedAdjustAmount?: boolean
  /**
   * 跟低不跟高：true跟低不跟高
   */
  public onlyAdjustLower?: boolean
  /**
   * 价差小于一定程度，不跟价:percent-百分比;abs-绝对值
   */
  public operateBase?: string
  /**
   * 价差小于一定程度，不跟价:阀值
   */
  public operateValue?: number
  /**
   * 友商无货，不跟价:true不跟价
   */
  public oppOutStockNotFollow?: boolean
  /**
   * 跟价限购：true限购promoLimitNumber必填
   */
  public promoLimit?: boolean
  /**
   * 跟价限购：限购总库存X件
   */
  public promoLimitNumber?: number
  /**
   * 价差小于一定程度，不跟价:true不跟价时operateBase和operateValue参数不允许为空
   */
  public spreadLessRangeNotFollow?: boolean
}
export class PageVOActivitySkuListVO {
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
  public entities: ActivitySkuListVO[]
}
export class PageVOAuditFlowListVO {
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
  public entities: AuditFlowListVO[]
}
export class PageVOBlackListVO {
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
  public entities: BlackListVO[]
}
export class PageVODeptFollowRuleListVO {
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
  public entities: DeptFollowRuleListVO[]
}
export class PageVOFollowPoolListVO {
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
  public entities: FollowPoolListVO[]
}
export class PageVOUserInputDataListVO {
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
  public entities: UserInputDataListVO[]
}
/**
 * 是否自动发布价格更新参数实体
 */
export class PoolIsAutoPubUpdateDTO {
  public _cidList?: number[]
  public _deptIdList?: string[]
  public _salerErp?: string[]
  /**
   * 是否自动发布：1是,0否
   */
  public isAutoPub?: number
  /**
   * sku 数组集合
   */
  public skuList?: number[]
}
/**
 * 查看促销展示参数对象
 */
export class PromotionListVO {
  /**
   * 京东ERP价格
   */
  public erpPrice?: number
  /**
   * 京东商品名称
   */
  public name?: string
  /**
   * 京东价格
   */
  public price?: number
  /**
   * 京东sku,sku即为id
   */
  public skuId?: number
  public promotions: PromotionVO[]
}
/**
 * 促销展示对象
 */
export class PromotionVO {
  /**
   * 是否可以删除；true可删除
   */
  public canDelete?: boolean
  /**
   * 渠道
   */
  public channel?: string
  /**
   * 审核状态
   */
  public checkState?: string
  /**
   * 查看详情的链接地址
   */
  public detailLink?: string
  /**
   * 是否DPS创建促销；true是
   */
  public isDps?: boolean
  /**
   * 促销id
   */
  public promoId?: number
  /**
   * 优惠信息
   */
  public promoInfo?: string
  /**
   * 促销名称
   */
  public promoName?: string
  /**
   * 类型
   */
  public promoTypeName?: string
  /**
   * 京东sku,sku即为id
   */
  public skuId?: number
  /**
   * 开始时间
   */
  public timeBegin?: string
  /**
   * 结束时间
   */
  public timeEnd?: string
}
/**
 * 手动发布价格返回sku具体错误信息
 */
export class PubPriceErrorVO {
  /**
   * 错误信息
   */
  public errMsg?: string
  /**
   * skuId
   */
  public skuId?: number
}
export class ReplyVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: any
  /**
   * 结果描述
   */
  public message: string
}
export class ReplyVOActivitySkuShowVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: ActivitySkuShowVO
}
export class ReplyVOAuditFlowDeptFollowRuleDetailVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: AuditFlowDeptFollowRuleDetailVO
}
export class ReplyVODeptFollowRuleEditVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: DeptFollowRuleEditVO
}
export class ReplyVOListOpponentVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: OpponentVO[]
}
export class ReplyVOListPubPriceErrorVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PubPriceErrorVO[]
}
export class ReplyVOPageVOActivitySkuListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVOActivitySkuListVO
}
export class ReplyVOPageVOAuditFlowListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVOAuditFlowListVO
}
export class ReplyVOPageVOBlackListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVOBlackListVO
}
export class ReplyVOPageVODeptFollowRuleListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVODeptFollowRuleListVO
}
export class ReplyVOPageVOFollowPoolListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVOFollowPoolListVO
}
export class ReplyVOPageVOUserInputDataListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVOUserInputDataListVO
}
export class ReplyVOPromotionListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PromotionListVO
}
export class ReplyVOUserInputDataEditVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: UserInputDataEditVO
}
export class ReplyVOint {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: number
  /**
   * 结果描述
   */
  public message: string
}
export class RiskParam {
  /**
   * 最高价的
   */
  public maxPriceRate?: number
  /**
   * 最低毛利率
   */
  public minGpRate?: number
  /**
   * 厂商底价的
   */
  public minVenderPriceRate?: number
}
/**
 * 新增、更新【用户录入数据】的参数
 */
export class UserInputDataAddUpdateDTO {
  /**
   * 价格约束开始时间
   */
  public fromData?: string
  /**
   * 主键id
   */
  public id?: number
  /**
   * 最高价
   */
  public maximumPrice?: number
  /**
   * 底价
   */
  public minimumPrice?: number
  /**
   * 价格约束类型:1供应商限价 2促销 3独家品 4其他
   */
  public priceLimitType?: number
  /**
   * 价格约束方式:1不低于限价 2不高于限价 3固定限价 4区间限价
   */
  public priceLimitWay?: number
  /**
   * 真实成本
   */
  public realCost?: number
  /**
   * 备注
   */
  public remark?: string
  /**
   * sku id
   */
  public skuId?: number
  /**
   * 价格约束结束时间
   */
  public toData?: string
}
/**
 * 【用户录入数据】编辑对象
 */
export class UserInputDataEditVO {
  /**
   * 价格约束开始时间
   */
  public fromData?: string
  /**
   * 主键id
   */
  public id?: number
  /**
   * 最高价
   */
  public maximumPrice?: number
  /**
   * 底价
   */
  public minimumPrice?: number
  /**
   * 价格约束类型:1供应商限价 2促销 3独家品 4其他
   */
  public priceLimitType?: number
  /**
   * 价格约束方式:1不低于限价 2不高于限价 3固定限价 4区间限价
   */
  public priceLimitWay?: number
  /**
   * 真实成本
   */
  public realCost?: number
  /**
   * 备注
   */
  public remark?: string
  /**
   * sku id
   */
  public skuId?: number
  /**
   * 价格约束结束时间
   */
  public toData?: string
}
/**
 * 【用户录入数据】列表展示对象
 */
export class UserInputDataListVO {
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 分类名称
   */
  public categoryInfo?: string
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * 价格约束开始时间
   */
  public fromData?: string
  /**
   * 主键id，删除和编辑时用
   */
  public id?: number
  /**
   * 定价（图书专用）
   */
  public marketPrice?: number
  /**
   * 最高价
   */
  public maximumPrice?: number
  /**
   * 底价
   */
  public minimumPrice?: number
  /**
   * 价格约束类型
   */
  public priceLimitTypeDesc?: string
  /**
   * 价格约束方式
   */
  public priceLimitWayDesc?: string
  /**
   * 进货价
   */
  public purchasePrice?: number
  /**
   * 真实成本
   */
  public realCost?: number
  /**
   * 京东价
   */
  public redPrice?: number
  /**
   * 备注
   */
  public remark?: string
  /**
   * sku id
   */
  public skuId?: number
  /**
   * 商品名
   */
  public skuName?: string
  /**
   * 价格约束结束时间
   */
  public toData?: string
}
