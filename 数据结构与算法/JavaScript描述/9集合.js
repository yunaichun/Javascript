function Set(){
	this.dataStore=[];
}

//向集合添加元素
Set.prototype.add=function(data){
	if(this.dataStore.indexOf(data)<0){ 
		this.dataStore.push(data);
		return true;
	}else{
		return false;
	}
}

//移除集合中元素
Set.prototype.remove=function(data){
	if(this.dataStore.indexOf(data)>-1){
		this.dataStore.splice(this.dataStore.indexOf(data),1)
		return true;
	}else{
		return false;
	}
}

//显示集合
Set.prototype.show=function(){
	return this.dataStore;
}

//检查一个成员是否属于该集合
Set.prototype.contains=function(data){
	if(this.dataStore.indexOf(data)>-1){
		return true;
	}else{
		return false;
	}
}

//返回集合的大小
Set.prototype.size=function(){
	return this.dataStore.length;
}

//求两个集合的并集(传入的是另一个集合)
Set.prototype.union=function(set){
    var tempSet=new Set();//将交集存入一个新集合保存
	for(var i=0;i<this.dataStore.length;++i){
		tempSet.add(this.dataStore[i]);//先将已知集合存入临时集合
	}
	for(var i=0;i<set.dataStore.length;++i){
		if(!tempSet.contains(set.dataStore[i])){
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

//求两个集合的交集
Set.prototype.intersect=function(set){
	var tempSet=new Set();
	for(var i=0;i<this.dataStore.length;++i){
		if(set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

//判断一个集合（this）是否是另一个集合的子集(set)
Set.prototype.subset=function(set){
	if(this.size()>set.size()){
		return false;
	}else{
        for(var member in this.dataStore){
			if(!set.contains(member)){
				return false;
			}
		}
	}
	return true;
}

//属于一个集合，但不属于另一个集合（补集）
Set.prototype.difference=function(set){
	var tempSet=new Set();
	for(var i=0;i<this.dataStore.length;++i){
		if(!set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

var sz=new Set();
sz.add("11");
sz.add("22");
sz.add("33");
sz.add("44");
console.log("初始sz集合："+sz.show());
sz.remove("44");
console.log("移除44之后sz集合是："+sz.show());

var sz2=new Set();
sz2.add("11");
sz2.add("22");
sz2.add("55");
console.log("sz2集合:"+sz2.show());

var tempSet=new Set();
tempSet=sz.union(sz2);
console.log("sz集合与sz2集合的并集是："+tempSet.show());

var tempSet2=new Set();
tempSet2=sz.intersect(sz2);
console.log("sz集合与sz2集合的交集是："+tempSet2.show());
console.log("sz集合是sz2集合的子集是："+sz.subset(sz2));

var tempSet3=new Set();
tempSet3=sz.difference(sz2);
console.log("属于sz集合但不属于sz2集合的成员："+tempSet3.show());

