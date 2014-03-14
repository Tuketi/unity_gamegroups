    var distance;
    var target : Transform;
    var lookAtDistance = 15.0;
    var attackRange = 10.0;
    var moveSpeed = 5.0;
    var damping = 6.0;
    private var isItAttacking = false;
     
    function Update ()
    {
    distance = Vector3.Distance(target.position, transform.position);
     
    if(distance < lookAtDistance)
    {
    isItAttacking = false;
    
    lookAt ();
    }
    if(distance > lookAtDistance)
    {
  
    }
    if(distance < attackRange)
    {
    attack ();
    }
    
    }
     
     
    function lookAt ()
    {
    var rotation = Quaternion.LookRotation(target.position - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
    }
     
    function attack ()
    {
    isItAttacking = true;
    
     
    transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
    }