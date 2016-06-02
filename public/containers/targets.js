import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { getModel } from '../actions/model';
import { bindActionCreators } from 'redux';

class TargetList extends Component {
  componentDidMount(){
    this.props.getModel('target', '/all/true', 'NEW_MODELS');
  }

  renderList () {
    var groupTargets;
    if (this.props.activeGroup) {
      groupTargets = this.props.targets.filter((target) => { return target.list === this.props.activeGroup.name; });
      return groupTargets.map((target) => {
        return (
          <li
          className='list-group-item' 
          key={ target.handle }> 
          { target.handle }
          </li>
        )
      })
    }
  }

  render () {
    return (
      <ul 
      className="list-group col-sm-3">
      targets
      { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps (state) {
  console.log('state in TargetList\n', state)
  return {
    targets: state.models.target,
    activeGroup: state.activeGroup
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getModel: getModel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetList);