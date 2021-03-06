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

export const PostPage = ({ prop }: Props) => {
  return <div>{prop}</div>;
};

export const PostPageContainer = connect<
  StateProps,
  DispatchProps,
  Props,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(PostPage)
