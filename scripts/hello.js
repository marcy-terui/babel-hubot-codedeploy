// Description:
//   Hello world
export default function(robot){
  robot.hear(/hello/, (res) => {
    res.send('world');
  });
}
