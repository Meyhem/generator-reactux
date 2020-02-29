import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { RootState } from "../../features/types"

const mapStateToProps = (state: RootState) => ({
  storeValue: 123
})

const mapDispatchToProps = (d: Dispatch) => ({
  action: () => d({ type: "replace me" })
})

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

interface Props extends StateProps, DispatchProps {
  prop: string
}

export const MainPage = ({ prop }: Props) => {
  return <div>{prop}</div>;
};

export const MainPageContainer = connect<
  StateProps,
  DispatchProps,
  Props,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
