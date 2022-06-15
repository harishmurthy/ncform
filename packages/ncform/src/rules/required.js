import ncformCommon from '../../../ncform-common/dist/ncformCommon';

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class RequiredRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "required";
    this.defaultErrMsg = "is required";
  }

  validateLogic(val, ruleVal) {
    console.log("hit!!");
    if (!ruleVal) return true;
    return notEmptyVal(val);
  }
}

module.exports = RequiredRule;
