/** ----------------------------------------------------------------------------------
 *
 *      File            Strawberry.js
 *      Ported By       Young-Hwan Mun
 *      Contact         yh.msw9@gmail.com
 * 
 * -----------------------------------------------------------------------------------
 *   
 *      Created By              Allen Benson G Tan on 5/19/12 
 *      Copyright (c) 2012      WhiteWidget Inc. All rights reserved.   
 *
 * -----------------------------------------------------------------------------------
 * 
 *      Permission is hereby granted, free of charge, to any person obtaining a copy
 *      of this software and associated documentation files (the "Software"), to deal
 *      in the Software without restriction, including without limitation the rights
 *      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *      copies of the Software, and to permit persons to whom the Software is
 *      furnished to do so, subject to the following conditions:
 * 
 *      The above copyright notice and this permission notice shall be included in
 *      all copies or substantial portions of the Software.
 * 
 *      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *      THE SOFTWARE.
 *
 * ----------------------------------------------------------------------------------- */ 

msw.Strawberry = cc.PolygonSpriteEx.extend 
({
	ctor:function ( )
	{
		this._super ( );

		var		points = 
		[		 
			51,  5,
			56, 21,
			54, 45,
			37, 62,
			 8, 48,
			12, 24,
			34,  5
		];

		var 	body = this.createBody ( VisibleRect.center ( ), 0, points, 5, 0.2, 0.2 );

		this.initWithFile ( "res/Images/strawberry.png", body, true );

		this.setType   ( cc.PolygonSpriteEx.Type.Strawberry );
		this.setSplurt ( new cc.ParticleSystem ( "res/Particles/strawberry_splurt.plist" ) ); 
		this.getSplurt ( ).stopSystem ( );			
	},
});