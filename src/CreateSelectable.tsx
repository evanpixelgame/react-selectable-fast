import React, { Component, ComponentType } from 'react'
import { getBoundsForNode, TComputedBounds, TGetBoundsForNodeArgs } from './utils'
import { TSelectableItemState, TSelectableItemProps } from './Selectable.types'
import { SelectableGroupContext } from './SelectableGroup.context'

type TAddedProps = Partial<Pick<TSelectableItemProps, 'isSelected'>>

export const createSelectable = <T extends object>(
  WrappedComponent: ComponentType<TSelectableItemProps & T>
): ComponentType<T & TAddedProps> =>
  class SelectableItem extends Component<T & TAddedProps, TSelectableItemState> {
    static contextType = SelectableGroupContext

    state: TSelectableItemState

    node: HTMLElement | null = null
    bounds: TComputedBounds[] | null = null

    constructor(props: T & TAddedProps) {
      super(props)
      const { isSelected = false } = props // Default value for isSelected
      this.state = {
        isSelected,
        isSelecting: false,
      }
    }

    componentDidMount() {
      this.updateBounds()
      this.context.selectable.register(this)
    }

    componentWillUnmount() {
      this.context.selectable.unregister(this)
    }

    updateBounds = (containerScroll?: TGetBoundsForNodeArgs) => {
      this.bounds = getBoundsForNode(this.node!, containerScroll)
    }

    getSelectableRef = (ref: HTMLElement | null) => {
      this.node = ref
    }

    render() {
      const { isSelected, ...restProps } = this.props // Destructure to ensure we get props correctly
      return (
        <WrappedComponent
          {...(restProps as T)} // Ensure the rest props are of the correct type
          {...this.state}
          selectableRef={this.getSelectableRef}
        />
      )
    }
  }
