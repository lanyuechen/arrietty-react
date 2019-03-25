export default function(type, data) {
  return function(widget) {

    function handleDragStart(e) {
      e.dataTransfer.setData('text', JSON.stringify({ type, data }));
    }

    function handleDrag(e) {

    }

    function handleDragEnd(e) {

    }

    return {
      ...widget,
      props: {
        ...widget.props,
        draggable: true,
        onDragStart: handleDragStart,
        //onDrag: handleDrag,
        //ondragend: handleDragEnd
      }
    };
  }
}