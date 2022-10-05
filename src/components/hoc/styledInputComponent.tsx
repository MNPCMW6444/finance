const fieldStyle = (wide: boolean) => ({
  width: wide ? "70%" : "15%",
  marginLeft: "12%",
});
export function styledInputComponent<P>(
  WrappedComponent: React.ComponentType<P>,
  wide: boolean
) {
  const ComponentWithExtraInfo = (props: P) => {
    return <WrappedComponent {...props} sx={fieldStyle(wide)} />;
  };
  return ComponentWithExtraInfo;
}
export default styledInputComponent;
